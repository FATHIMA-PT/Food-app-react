import React, { useState } from 'react';
import {Button, Card, Modal} from 'react-bootstrap';
import { addToHistory, deleteAImage } from '../services/allAPI';


function VideoCard({displayData,setDeletedUploadedImages}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // add image in watch history
  const handleShow = async() => {
    setShow(true);
    // get time stamp
    let today = new Date()
    let timeStamp =(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today))
    const {caption,url} = displayData
    // video history
    const videoHistory = {
      caption,url,timeStamp
    }
    // make api call
    await addToHistory(videoHistory)
  } 

 

  // deleting a image
  const removeImage = async(id)=> {
    // make api call
    const response = await deleteAImage(id)
    setDeletedUploadedImages(true)
  }

  // drag a image
  const dragStarted =(e,id)=> {
    console.log("Drag started");
    e.dataTransfer.setData("cardid",id)
  }

 
  return (
    <>
  {
    displayData&&
     <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}> 
      <Card.Img  onClick={handleShow} style={{ width:'100%',height:'180px' }} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title  className='d-flex justify-content-between align-items-center'>
          <h5>{displayData?.caption}</h5>
        </Card.Title>
        <i className='fa-solid fa-trash fa-2x  text-danger' onClick={()=>removeImage(displayData?.id)}></i>
   
      </Card.Body>
    </Card>


  }

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
           <img className=' ms-5' style={{width:'250px',height:'150px'}} src={displayData?.url} alt="" />
           <h3 className='text-center mt-3'>{displayData?.caption}</h3>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>

   
 
   </> 
  )
}

export default VideoCard
