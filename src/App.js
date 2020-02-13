import React from 'react';
import Layout from './Components/Layout/Layout';
import FormBuilder from "./Components/Forms/FormBuilder/FormBuilder";
import ApplicationsTable from "./Components/ApplicationsTable/ApplicationsTable";

function App() {
    return (
        <Layout>
            <FormBuilder appId={undefined}/>
            <ApplicationsTable />
        </Layout>
    );
}

export default App;
