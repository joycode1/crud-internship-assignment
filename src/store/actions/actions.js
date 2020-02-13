import axios from 'axios';
import {REQUEST_START, SUBMIT_SUCCESS, REQUEST_FAIL, FETCH_DATA_SUCCESS} from "./actionTypes";


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


export {
    submitApplication,
    fetchApplications
}