import {Iaction, IApp} from "../../types";
import {updatePageAction as upCharPage} from "./charactersDuck";
import {updatePageAction as upLocPage} from "./locationsDuck";
import {updatePageAction as upEpiPage} from "./episodesDuck";


const getCurrentPath = () => {
    let path: string = window.location.pathname.replace('/', '');
    return path === '' ? "Characters" : path.charAt(0).toUpperCase() + path.slice(1);
}

const initialData: IApp = {
    current: getCurrentPath()
}

const SET_LOCATION = 'SET_LOCATION';
const FIRST_PAGE = 1;

export default function reducer (state: IApp = initialData, action: Iaction) {

    switch (action.type) {

        case SET_LOCATION:
            return {...state, current: action.payload};
        default:
            return state;
    }

}

export const setLocationAction = (location: string) => (dispatch: any, getState: any) => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    })
    pageAction(location, FIRST_PAGE)(dispatch,getState)
}

export const pageAction = (type: string, page: number) => (dispatch: any, getState: any) => {
    switch (type) {
        case "characters":
            upCharPage(page)(dispatch, getState);
            break;
        case "locations":
            upLocPage(page)(dispatch, getState);
            break;
        case "episodes":
            upEpiPage(page)(dispatch, getState);
            break;
    }
}