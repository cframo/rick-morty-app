import {Iaction, Idata} from "../../types";
import {gql} from "@apollo/client";
import {client} from "./dataSource";

const initialData: Idata = {
    fetching: false,
    data: [],
    current: {},
    nextPage: 1,
    pages: 1
}
const UPDATE_PAGE_EPISODES  = "UPDATE_PAGE_EPISODES";

const GET_EPISODES = "GET_EPISODES";
const GET_EPISODES_ERROR = "GET_EPISODES_ERROR";

const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS";
const SEARCH_EPISODES_SUCCESS = "SEARCH_EPISODES_SUCCESS";

export default function reducer(state: Idata = initialData, action: Iaction) {
    switch (action.type) {

        case UPDATE_PAGE_EPISODES:
            return {...state, nextPage:action.payload};

        case GET_EPISODES:
            return {...state, fetching: true};
        case GET_EPISODES_ERROR:
            return {...state, fetching: false, error: action.payload};

        case GET_EPISODES_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages};

        case SEARCH_EPISODES_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages, error: null};
        default:
            return state;
    }
}


export const searchEpisodeAction = (key: string, episode: boolean) => (dispatch: any, getState: any) => {
    let {nextPage} = getState().episodes;
    let query = gql `
        query($key:String,$page:Int){
            episodes(filter: {name: $key},page:$page) {
                results {
                  id, 
                  name, 
                  air_date,
                  episode, 
                  characters {
                    name,
                    image
                  }
                },
                info{
                    pages,
                    next
                }
            }
        }
        `;
    if(episode){
        query = gql `
        query($key:String,$page:Int){
            episodes(filter: {episode: $key}, page:$page) {
                results {
                  id, 
                  name, 
                  air_date,
                  episode, 
                  characters {
                    name,
                    image
                  }
                },
                info{
                    pages,
                    next
                }
            }
        }
        `;
        nextPage = 1;
    }

    dispatch({
        type: GET_EPISODES
    });
    return client.query({
        query,
        variables: {
            key,
            page: nextPage
        }
    }).then(({data, error}) => {
        if (error){
            dispatch({
                type: GET_EPISODES_ERROR,
                payload: error.message
            })
        }else{
            dispatch({
                type: SEARCH_EPISODES_SUCCESS,
                payload: data.episodes
            });
            dispatch({
                type: UPDATE_PAGE_EPISODES,
                payload: data.episodes.info.next ? data.episodes.info.next : 1
            });
        }
    }).catch(e => {
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: e.message
        })
        console.log(e.message);
    })



}

export const getEpisodesAction = (updatePage?: boolean) => (dispatch: any, getState: any) => {
    const query = gql`
        query($page:Int){
            episodes(page:$page) {
                results {
                  id, 
                  name, 
                  air_date,
                  episode, 
                  characters {
                    name,
                    image
                  }
                },
                info{
                    pages,
                    next
                }
            }
        }`;
    const {nextPage} = getState().episodes;
    dispatch({
        type: GET_EPISODES
    });
    return client.query({
        query,
        variables: {page: nextPage}
    })
        .then( ({data, error}) => {
            if (error){
                console.log(error.message);
                dispatch({
                    type: GET_EPISODES_ERROR,
                    payload: error.message
                });
            }else{
                dispatch({
                    type: GET_EPISODES_SUCCESS,
                    payload: data.episodes
                });
                if(updatePage)
                    dispatch({
                        type: UPDATE_PAGE_EPISODES,
                        payload: data.episodes.info.next ? data.episodes.info.next : 1
                    });
            }
        }).catch(e => {
            dispatch({
                type: GET_EPISODES_ERROR,
                payload: e.message
            })
            console.log(e)
        });
}

export const updatePageAction = (page: number) => (dispatch: any, getState: any) =>{
    dispatch({
        type: UPDATE_PAGE_EPISODES,
        payload: page
    })
    getEpisodesAction(true)(dispatch, getState)
}
