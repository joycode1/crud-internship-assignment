import React from 'react';
import Button from "../../UI/Button/Button";

const DeleteForm = props => {
    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">Are you sure you want to delete this application?</h5>
            </div>
            <div className="modal-footer">
                <Button btnClass="btn btn-danger" clicked={props.deleteRowClicked}>Delete</Button>
                <Button btnClass="btn btn-secondary" clicked={props.modalClose}>Close</Button>
            </div>
        </React.Fragment>

    )
};

export default DeleteForm;


