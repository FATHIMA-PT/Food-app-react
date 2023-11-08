import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory } from '../services/allAPI';


function Category() {
  const [categoryName,setCategoryName] = useState("")
  const [categories,setCategories] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const insertCategory = async()=>{
    if(categoryName){
      let body ={
        categoryName
      }
      // make api call
       const response= await addCategory(body)
       console.log(response);
       if(response.status>=200 && response.status<300){
        // reset state
        setCategoryName(body)
        // modal close
        handleClose()
        // call getcategory
        getCategories()
       }
       else{
        toast.warning("Uploading Error")
       }
    }else{
      //  alert
      toast.info("Please fill the form completely")
    }
  }

  const getCategories = async()=> {
    const {data} = await getAllCategory()
    setCategories(data)
  }

  const removeCategory = async(id)=> {
    // make api call
    await deleteCategory(id)
    // get all categoris
    getCategories()
  }

  useEffect(()=> {
    getCategories()
  },[])

  

  return (
   <>
      <div className='d-grid'>
        <button onClick={handleShow} style={{width:'250px',height:'40px'}}  className="btn btn-info ">Add New Category</button>
        
      </div>
      {
        categories?categories.map(item=> (
          <div className='border p-3 rounded mt-5 mb-3'style={{height:'150px',width:'200px'}} > 
            <div className="d-flex flex-column justify-content-between">
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>

          </div>
        )):
        <p className='fw-bolder text-danger mt-3'> Nothing to display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Form Completely</p>
          <Form className='rounded p-3 border'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='mt-3'>Enter Category Name</Form.Label>
          <Form.Control  type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
       
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">Add</Button>
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

export default Category
