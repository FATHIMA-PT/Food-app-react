import { Button, Modal, Form } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { uploadImage } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadImageServerResponse}) {
  // state for uploading images
  const [image,setImage] =useState({
    id:"",caption:"",url:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(image);
  // upload
  const handleUpload = async ()=> {
    const {id,caption,url} = image
    if(!id || !caption || !url){
      toast.warning("Please fill the form completely")
    }else{
      // make api call
      const response = await uploadImage(image)
      if(response.status>=200 && response.status<300){
        // reset state
        setImage({
          id: "",caption: "",url: ""
        })
        // set server server response
        setUploadImageServerResponse(response.data)
        // modal hide
      handleClose()
      // console.log(response);
      toast.success(`"${response.data.caption}" is uploaded successfully`)
      }
      else{
        toast.error("Uploading error....")
      }
    }
  }
  return (
   <>
      <div className='d-flex align-items-center' >
        <h5>Upload New Food Items</h5>
         <button className='btn' onClick={handleShow}><i className='fa-solid fa-circle-plus fs-3'></i></button>      
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className=' p-3 border rounded border-secondary'>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
      
        <Form.Control type="text mb-2" placeholder="ID" onChange={(e)=>setImage({...image,id:e.target.value})}/>
        <Form.Control type="text mb-2" placeholder="Caption" onChange={(e)=>setImage({...image,caption:e.target.value})} />
        <Form.Control type="email" placeholder="Image URL" onChange={(e)=>setImage({...image,url:e.target.value})} />
       
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      {/* toastify */}
      <ToastContainer
          position="top-center"
          autoClose={2000}
          
          theme="colored"
      />

    
     
   </>
  )
}

export default Add
