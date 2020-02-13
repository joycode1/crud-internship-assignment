import React from 'react';
import Layout from './Components/Layout/Layout';
import FormBuilder from "./Components/FormBuilder/FormBuilder";
import ApplicationsTable from "./Components/ApplicationsTable/ApplicationsTable";

function App() {
    return (
        <Layout>
            <FormBuilder/>
            <ApplicationsTable />
        </Layout>
    );
}

export default App;
