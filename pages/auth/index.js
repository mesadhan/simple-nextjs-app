import React from 'react'
import Layout from "../../components/Layout";


const authIndexPage = (props) => (

    <div>
        <Layout>
            <p>Hello from auth page</p>
            <h1>The Main Page of  -- {props.appName}</h1>
        </Layout>
    </div>

);



authIndexPage.getInitialProps = (context) =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'appName': 'Super App'} );
        },0)
    });
    return promise;
};

export default authIndexPage;