import React from 'react'
import Layout from "../components/Layout";
import {withRouter} from 'next/router'


const Content = withRouter((props) => (
    <div>
        <h1 style={{color: 'red'}}>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
));

const Post = () => (
    <Layout>
        <Content />
    </Layout>
);

export default Post
