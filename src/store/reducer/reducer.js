import {REQUEST_START, SUBMIT_SUCCESS, REQUEST_FAIL,FETCH_DATA_SUCCESS,} from "../actions/actionTypes";

const initialState = {
    applications: [],
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    const reducerMap = {
        [REQUEST_START]: () => {
            return {
                ...state,
                loading: true,
                error: null
            }
        },
        [SUBMIT_SUCCESS]: () => {
            const newApplication = {...action.applicationData, appId: action.appId.name,};
            return {
                ...state,
                applications: [...state.applications, newApplication],
                loading: false
            }
        },
        [REQUEST_FAIL]: () => {
            return {
                error: action.error,
                loading:false
            }
        },
        [FETCH_DATA_SUCCESS]:()=>{
            return {
                ...state,
                applications:action.applications,
                loading: false
            }
        }
    };

    if (Object.keys(reducerMap).includes(action.type)) {
        return reducerMap[action.type]();
    }
    return state;
};


export default reducer;