import {combineReducers, createStore} from "redux";
import {covid} from "../reducers/covid";

const reducers = combineReducers({
    covid: covid
})

export const storeCustom = createStore(
    reducers
);
