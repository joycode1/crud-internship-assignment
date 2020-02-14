import React from 'react';
import Button from "../../UI/Button/Button";
import FormBuilder from "../FormBuilder/FormBuilder";

const EditForm = props => {
    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">Edit Application:</h5>
                <Button btnClass="btn btn-secondary" clicked={props.modalClose}>Close</Button>
            </div>
            <div className="modal-body">
                <FormBuilder appId={props.appId} modalClose={props.modalClose}/>
            </div>
        </React.Fragment>
    )
};
export default EditForm;