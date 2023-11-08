import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory] =useState([])
  const getWatchHistory = async ()=> {
    // make api call
    const {data} = await getHistory()
    setHistory(data)
  }
  useEffect(()=> {
    getWatchHistory()
  },[])

  return (
    <>
      <div className='container mt-5 align-items-center justify-content-between d-flex '>
        <h2>Watch History</h2>
         <Link to={'/home'}  className='d-flex text-align-center' style={{textDecoration:'none',fontSize:'20px',color:'black'}}> <i className='fa-solid fa-arrow-left fa-2x me-2'></i>
         Back to Home
         </Link>
      </div>
      <table className='mt-5 table border shadow container p-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
         { 
          history.length>0?
          history.map((item,index)=> (
            <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td>{item?.url}</td>
            <td>{item?.timeStamp}</td>
          </tr>
          ))
         :<p className='text-danger fs-5 fw-bolder'>Nothing To Display</p>

          }

        </tbody>

      </table>
    </>
    
  )
}

export default WatchHistory
