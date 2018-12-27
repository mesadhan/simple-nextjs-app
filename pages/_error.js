import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const errorPage = () => (

   <div>
       <h1>404 Error Page</h1>
       {' | '}<Link href="/"><a>Home</a></Link>{' | '}
   </div>


);


export default errorPage;