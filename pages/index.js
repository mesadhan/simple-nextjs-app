import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import User from '../components/User'


const indexPage = ({ href, name } ) => (
    <div>
        <Head>
            <title>Welcome to next.js</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/static/loader.png" type="image/gif" sizes="16x16"/>
        </Head>
        <h1>Welcome to next.js!</h1>
        <p style={{ color: 'red' }}>This is paragraph!</p>

        <User name={"Sadhan"} age={23} />


        {' | '}<Link href="/about"><a>About</a></Link>{' | '}


        {/*
            {' | '}<Link href="/auth"><a>Auth</a></Link>{' | '}
            <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}><a>About</a></Link>{' | '}
            <Link href="/about" replace>
                <a>About Replace</a>
            </Link>{' | '}

            <Link href="/about"><img width={50} src="/static/loader.png" alt="image" /></Link>

            <Link href="/about"><a>About</a></Link> {' | '}
            <a onClick={() => Router.push('/auth')}>Auth</a> {' | '}
            <a onClick={() => Router.push('/auth')}>Auth</a> {' | '}
            <span onClick={handler}>About</span>{' | '}
        */}

    </div>
);


const handler = () => {
    Router.push({
        pathname: '/about',
        query: { name: 'Zeit' }
    })
};




export default indexPage;
