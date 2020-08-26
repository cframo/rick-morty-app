import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import charactersDuck, {getCharactersAction} from "./charactersDuck";
import appDuck from "./appDuck";
import locationsDuck, {getLocationsAction} from "./locationsDuck";
import episodesDuck, {getEpisodesAction} from "./episodesDuck";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

let rootReducer = combineReducers({
    app: appDuck,
    characters: charactersDuck,
    locations: locationsDuck,
    episodes: episodesDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    getCharactersAction()(store.dispatch, store.getState);
    getLocationsAction()(store.dispatch, store.getState);
    getEpisodesAction()(store.dispatch, store.getState);
    return store;
}