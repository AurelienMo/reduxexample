import {FETCH_COVID_PARTY} from "./types";

export const fetchGlobal = (dataApi) => {
    return {
        type: FETCH_COVID_PARTY,
        value: dataApi.Global
    }
}
