import React from 'react'

const Navbar = () => {
  return (
    <nav className='d-flex row w-100 align-items-center justify-content-between p-3 border border-1 shadow-lg'>
      <div className='col-lg-5'>Tittle</div>
     
        <div className='col-lg-5 d-flex align-items-center justify-content-between'>
            <a >Home</a>
            <a >about</a>
            <a >Blog</a>
            <a >Contect</a>
            <a><button className='btn btn-outline-primary rounded-0'>button</button></a>
        </div>
      
    </nav>
  )
}

export default Navbar