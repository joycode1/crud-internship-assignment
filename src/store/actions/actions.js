import axios from 'axios';
import {
    REQUEST_START,
    SUBMIT_SUCCESS,
    REQUEST_FAIL,
    FETCH_DATA_SUCCESS,
    DELETE_DATA_SUCCESS,
    UPDATE_DATA_SUCCESS
} from "./actionTypes";


const startRequest = () => {
    return {
        type: REQUEST_START
    }
};
const successSubmit = (id, applicationData) => {
    return {
        type: SUBMIT_SUCCESS,
        appId: id,
        applicationData
    }
};
const failRequest = (error) => {
    return {
        type: REQUEST_FAIL,
        error
    }
};

const submitApplication = (applicationData) => {
    return dispatch => {
        dispatch(startRequest());
        axios.post('https://student-management-task.firebaseio.com/applications.json', applicationData)
            .then((res) => {
                dispatch(successSubmit(res.data, applicationData))
            })
            .catch(err => dispatch(failRequest(err)))
    }
};
const fetchSuccess = (applications) => {
    return {
        type: FETCH_DATA_SUCCESS,
        applications
    }
};
const fetchApplications = () => {
    return dispatch => {
        dispatch(startRequest());
        axios.get('https://student-management-task.firebaseio.com/applications.json')
            .then((res) => {
                const applications = [];
                for (let id in res.data) {
                    applications.push({...res.data[id], appId: id});
                }
                dispatch(fetchSuccess(applications))
            })
            .catch(err => failRequest(err))
    }
};

const deleteSuccess = (appId) =>{
    return {
        type: DELETE_DATA_SUCCESS,
        appId

    }
};
const deleteApplication = (appId)=>{
    return dispatch =>{
        dispatch(startRequest());
        axios.delete(`https://student-management-task.firebaseio.com/applications/${appId}.json`)
            .then((res) => {
                dispatch(deleteSuccess(appId))
            })
            .catch(err => failRequest(err))
    }
};
const updateSuccess = (appData,appId) =>{
  return {
      type: UPDATE_DATA_SUCCESS,
      appId,
      appData
  }
};
const updateApplication =(appData,appId)=>{
  return dispatch =>{
      dispatch(startRequest());
      axios.put(`https://student-management-task.firebaseio.com/applications/${appId}.json`,appData)
          .then((res) => {
             dispatch(updateSuccess(appData,appId))
          })
          .catch(err => failRequest(err))
  }
};
export {
    submitApplication,
    fetchApplications,
    deleteApplication,
    updateApplication
}