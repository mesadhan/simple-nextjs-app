import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import User from '../components/User'

class IndexPage extends Component {

    static getInitialProps(context){
        console.log('message', context);

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({'appName': 'Super App'} );
            },1000)
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
                <h1>Welcome to next.js!</h1>
                <h1> The Main Page of {this.props.appName} </h1>
                <p style={{color: 'red'}}>This is paragraph!</p>



                <User name={"Sadhan"} age={23}/>


                {' | '}<Link href="/about"><a>About</a></Link>{' | '}
                {' | '}<Link href="/about"><a>Auth</a></Link>{' | '}

            </div>
        )
    }
}


export default IndexPage;
