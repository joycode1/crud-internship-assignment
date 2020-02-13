import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchApplications} from "../../store/actions/actions";
import Table from "../UI/Table/Table";

const ApplicationsTable = props => {
    const {onFetchApplications, applications, loading} = props;
    const test = {
        /*name: 'Name',
        email: 'Email',
        phone: 'Phone Number',
        age: 'Age',
        communicationWay: 'Preferred Way of Communication',
        englishLvl: 'English Level',
        available: 'Available to Start',
        shortPresent: 'Short Personal Presentation',
        skills: 'Technical Skills and Courses',
        homeStudy: 'Study from home?'*/
    };
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
                    },{
                        Header: 'Actions',
                        accessor: 'appId',
                    },
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
