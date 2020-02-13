import {
    REQUEST_START,
    SUBMIT_SUCCESS,
    REQUEST_FAIL,
    FETCH_DATA_SUCCESS,
    DELETE_DATA_SUCCESS, UPDATE_DATA_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    applications: [],
    loading: false,
    error: null,
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
                applications: [newApplication,...state.applications],
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
                applications:action.applications.reverse(),
                loading: false
            }
        },
        [DELETE_DATA_SUCCESS]:()=>{
            const applications = state.applications.filter(({appId})=> appId!==action.appId).reverse();
            return{
                ...state,
                applications,
                loading:false
            }
        },
        [UPDATE_DATA_SUCCESS]: ()=>{
            const changedApplicationIndex = state.applications.findIndex(({appId})=> appId===action.appId);
            const applications =[...state.applications];
            const updatedApplication = {...action.appData, appId: action.appId};
           applications.splice(changedApplicationIndex,1,updatedApplication);
            return{
                ...state,
                applications:applications,
                loading:false
            }
        }
    };

    if (Object.keys(reducerMap).includes(action.type)) {
        return reducerMap[action.type]();
    }
    return state;
};


export default reducer;