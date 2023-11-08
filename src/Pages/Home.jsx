import React, { useState } from 'react';
import Add from '../Components/Add';
import {Link} from 'react-router-dom';
import View from '../Components/View';
import Category from '../Components/Category'

function Home() {
  // statelifting
  const [uploadImageServerResponse,setUploadImageServerResponse] = useState({})
  return (
    <>
    <div className="container mt-5 d-flex align-items-center justify-content-between">
      <Add setUploadImageServerResponse={setUploadImageServerResponse}/>
      
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'black'}} className='fw-bolder fs-5'>Watch History</Link>
    </div>
    <div className=" mt-5 mb-5 d-flex justify-content-between container-fluid">
      <div className="all-videos">
        <h4>All Food Items</h4>
        <View uploadImageServerResponse={uploadImageServerResponse}/>
      </div>
       <Category />
    </div>
      
    </>
  )
}

export default Home
