import {SUBMIT_START, SUBMIT_SUCCESS, SUBMIT_FAIL} from "../actions/actionTypes";

const initialState = {
    applications: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    const reducerMap = {
        [SUBMIT_START]: () => {
            return {
                ...state,
                loading: true,
                error: null
            }
        },
        [SUBMIT_SUCCESS]: () => {
            const newApplication = {...action.applicationData, appId: action.appId,};
            return {
                ...state,
                applications: [...state.applications, newApplication],
                loading: false
            }
        },
        [SUBMIT_FAIL]: () => {
            return {
                error: action.error
            }
        }
    };

    if (Object.keys(reducerMap).includes(action.type)) {
        return reducerMap[action.type]();
    }
    return state;
};


export default reducer;