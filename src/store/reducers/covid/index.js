import {FETCH_COVID_PARTY} from "../../actions/covid/types";

const initialState = {
    newConfirm: null,
    totalConfirm: null,
    newDeaths: null,
    totalDeaths: null
}

export const covid = (state = initialState, action) => {
    console.log(action)
    let nextState;
    switch (action.type) {
        case FETCH_COVID_PARTY:
            nextState = {
                ...state,
                newConfirm: action.value.NewConfirmed,
                totalConfirm: action.value.TotalConfirmed,
                newDeaths: action.value.NewDeaths,
                totalDeaths: action.value.TotalDeaths
            }
            break;
        default:
            return state;
    }

    return nextState;
}
