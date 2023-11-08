import React from 'react';
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5' style={{width:'100%',height:'400px'}}>
      <div className="container d-flex justify-content-between">
        <div className="heading" style={{width:'600px'}}>
          <h4>Enjoy Your Delicious Meal....</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores maxime modi repellat rem et repellendus maiores provident aut. Facere pariatur, rerum sequi cumque quos ratione. Pariatur nobis ipsam deleniti dolor!</p>
            <Link to={'/home'}>
            <button className='btn btn-danger rounded'>Explore More</button>
            </Link>
        </div>
        <div className="image">
          <img style={{width:'550px',height:'350px'}} className='img img-fluid rounded-circle' src="https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif" alt="img" />
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage
