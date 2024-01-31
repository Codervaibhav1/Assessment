import React from 'react'

const Navbar = () => {
  return (
    <nav className='d-flex align-items-center justify-content-between p-3 border border-1 shadow-lg'>
      <div>Tittle</div>
     
        <div className=' w-25 d-flex align-items-center justify-content-between'>
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