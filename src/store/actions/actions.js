import axios from 'axios';
import {SUBMIT_START, SUBMIT_SUCCESS, SUBMIT_FAIL} from "./actionTypes";


const startSubmit = () => {
    return {
        type: SUBMIT_START
    }
};
const successSubmit = (id, applicationData) => {
    return {
        type: SUBMIT_SUCCESS,
        appId: id,
        applicationData
    }
};
const failSubmit = (error) => {
    return {
        type: SUBMIT_FAIL,
        error
    }
};

const submitApplication = (applicationData) => {
    return dispatch => {
        dispatch(startSubmit());
        axios.post('https://student-management-task.firebaseio.com/applications.json',applicationData)
            .then((res) => {
                dispatch(successSubmit(res.data, applicationData))
            })
            .catch(err => dispatch(failSubmit(err)))
    }
};

export {
    submitApplication
}