import React from 'react'
import Banner from '../../Banner'   
import Product from '../../Product'   
import Comment  from  '../Comment'
function Home() {
  return (
    <React.Fragment>
        <Banner/>
        <Product/>
        <Comment/>
       
        </React.Fragment>
  )
}

export default Home