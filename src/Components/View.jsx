import React, { useEffect, useState } from 'react';
import VideoCard from '../Components/VideoCard';
import {Row, Col} from 'react-bootstrap'
import { getAllImages } from '../services/allAPI';

function View({uploadImageServerResponse}) {
  const [deleteUploadedImages,setDeletedUploadedImages] = useState(false)
  const [allImages,setAllImages] = useState([])
  const getAllUploadedImages = async ()=> {
    const {data} = await getAllImages()
    setAllImages(data);
  }

  useEffect(()=> {
    setDeletedUploadedImages(false)
    getAllUploadedImages()
  },[uploadImageServerResponse,deleteUploadedImages])

  // console.log(allImages);

  return (
    <>
    <Row>
     {
      allImages.length>0?
      allImages.map(image=> (
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayData={image} setDeletedUploadedImages={setDeletedUploadedImages}/>
        </Col>
      ))
      :<p className='text-danger fs-5 fw-bolder'>Nothing To Display</p>
      }
     
    </Row>
    </>
  )
}

export default View
