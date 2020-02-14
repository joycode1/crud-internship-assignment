import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {deleteApplication, fetchApplications} from "../../store/actions/actions";
import Table from "../UI/Table/Table";
import Modal from "../UI/Modal/Modal";
import DeleteForm from "../Forms/DeleteForm/DeleteForm";
import EditForm from "../Forms/EditForm/EditForm";
import Spinner from "../UI/Spinner/Spinner";
import ScrollableAnchor from 'react-scrollable-anchor';
const ApplicationsTable = props => {
    const {onFetchApplications, applications, onDeleteRowHandler} = props;
    const [modalShow, setModalShow] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [currAppId, setCurrAppId] = useState(null);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Student Applications',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    }, {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Phone Number',
                        accessor: 'phone',
                    },
                    {
                        Header: 'Preferred Way of Communication',
                        accessor: 'communicationWay',
                    }, {
                        Header: 'English Level',
                        accessor: 'englishLvl',
                    }, {
                        Header: 'Available to Start',
                        accessor: 'available',
                    }, {
                        Header: 'Technical Skills and Courses',
                        accessor: 'skills',
                    }, {
                        Header: 'Short Personal Presentation',
                        accessor: 'shortPresent',
                    }, {
                        Header: 'Study from home?',
                        accessor: 'homeStudy',
                    }, {
                        Header: 'Actions',
                        accessor: ''
                    }
                ],
            },
        ],
        []
    );
    useEffect(() => {
        onFetchApplications();
    }, [onFetchApplications]);

    const modalDeleteHandler = (appId, ev) => {
        setDeleteModal(true);
        setCurrAppId(appId);
        setModalShow(true);

    };
    const modalEditHandler = (appId, ev) => {
        setDeleteModal(false);
        setCurrAppId(appId);
        setModalShow(true);
    };
    const cancelModal = () => {
        setDeleteModal(null);
        setModalShow(false);
    };
    const deleteRowHandler = () => {
        onDeleteRowHandler(currAppId);
        cancelModal();
    };

    let modalForm = <DeleteForm
        modalClose={cancelModal}
        deleteRowClicked={deleteRowHandler}
    />;
    if (!deleteModal) {
        modalForm = <EditForm
            modalClose={cancelModal}
            appId={currAppId}
        />;
    }
    let table = <Spinner/>;
    if (!props.loading) {
        table = <Table columns={columns} data={applications}
                       deleteHandler={modalDeleteHandler}
                       editHandler={modalEditHandler}
        />;
    }
    return (
        <React.Fragment>
            <Modal show={modalShow} modalClose={cancelModal}>
                {modalForm}
            </Modal>
            <ScrollableAnchor id={'applications'}>
                <div className="container-fluid">
                    {table}
            </div></ScrollableAnchor>

        </React.Fragment>
    )
};
const mapStateToProps = state => {
    return {
        applications: state.applications,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchApplications: () => dispatch(fetchApplications()),
        onDeleteRowHandler: (appId) => dispatch(deleteApplication(appId))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsTable);
