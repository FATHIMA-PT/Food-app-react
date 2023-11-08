import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <div className='d-flex flex-column align-items-center justify-content-center mt-5 mb-2' style={{width:'100%',height:'400px'}}>
      <div className="footer d-flex justify-content-evenly w-100 ">
        <div className="website text-dark fw-bolder fs-5 " style={{width:'300px'}}>
        <i className="fa-solid fa-bowl-food fa-beat" style={{color:'black'}}></i>{' '}
        Food APP
          <h6 className='justify-content-evenly'> 
          Foods are made of both energy and non-energy components. The energy is obtained in the form of calories that are required by our boy cells.
          </h6>
        </div>
        <div className="links d-flex flex-column">
          <h5 >LINKS</h5>
          <Link style={{textDecoration:'none'}}>Food Vlog</Link>
          <Link style={{textDecoration:'none'}}>Food Recipies</Link>
          <Link style={{textDecoration:'none'}}>Top Restaurants</Link>
         </div>
         <div className="orders d-flex flex-column ms-3"  style={{width:'300px'}}>
          <h4>No Minimum Orders</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae eligendi laborum commodi placeat est? Quidem aut dicta doloremque, fugiat dolorem facere accusantium illo repellendus, perferendis quisquam esse. Molestias, placeat!</p>
         </div>
         <div className="contact ms-3">
          <h4>Contact Us</h4>
          <input type="text"  placeholder='Enter EmailId'/>{' '}
          <button className='btn btn-primary'><i class="fa-solid fa-arrow-right fa-beat"></i>
          </button>
          <div className='icons mt-3'>
          <i class="fa-brands fa-facebook fa-2x me-3 fa-beat-fade" ></i>
          <i class="fa-brands fa-instagram fa-2x me-3 fa-beat-fade"></i>
          <i class="fa-brands fa-github fa-2x me-3 fa-beat-fade"></i>
          <i class="fa-brands fa-whatsapp fa-2x fa-beat-fade"></i>
          </div>
         </div>
         
      </div>
      <p className='mt-4'>All Rights Are Reserved &copy; FoodApp.Com &reg; 2023</p>
      
    </div>
  )
}

export default Footer
