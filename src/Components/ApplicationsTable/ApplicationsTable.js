import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {fetchApplications} from "../../store/actions/actions";
import Table from "../UI/Table/Table";
import Modal from "../UI/Modal/Modal";
const ApplicationsTable = props => {
    const {onFetchApplications, applications, loading} = props;
    const [modalShow,setModalShow] = useState(false);
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

    const rowDeleteHandler = (appId, ev) => {
        console.log(appId)
        setModalShow(true);
    };
    const cancelModal = ()=>{
        setModalShow(false);
    };
    return (
        <React.Fragment>
            <Modal show={modalShow} modalClose={cancelModal} >
            modal here
            </Modal>
            <div className="container-fluid">
                <Table columns={columns} data={applications}
                       deleteHandler={rowDeleteHandler}
                />
            </div>
        </React.Fragment>
       )
};
const mapStateToProps = state => {
    return {
        applications: state.applications,
        loading: state.loading
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchApplications: () => dispatch(fetchApplications())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsTable);
