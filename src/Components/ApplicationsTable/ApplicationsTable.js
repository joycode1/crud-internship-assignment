import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchApplications} from "../../store/actions/actions";
import Table from "../UI/Table/Table";

const ApplicationsTable = props => {
    const {onFetchApplications, applications, loading} = props;

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
    console.log(applications);
    return (<div><Table columns={columns} data={applications}/></div>)
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
