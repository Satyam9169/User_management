import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div>Home</div>
        <div className="card">
          <div class="card-header">
            Featured
          </div>
          <div className="card-body">
            <h1 className="card-title">Hello User</h1>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to='/userdata' class="btn btn-primary">Go to userdata</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home