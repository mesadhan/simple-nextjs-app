import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import User from '../components/User'
import Header from "../components/Header";
import Layout from "../components/Layout";
import BooksView from "../components/BooksView";

class IndexPage extends Component {

    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({'appName': 'Super App'});
            }, 200)
        });
        return promise;
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Welcome to next.js</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="icon" href="/static/loader.png" type="image/gif" sizes="16x16"/>
                </Head>

                <Layout>
                    <p>Hello Next.js</p>

                    <h1> The Main Page of {this.props.appName} </h1>
                </Layout>



            </div>
        )
    }
}


export default IndexPage;
