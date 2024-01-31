import React from 'react'

const Card = ({data}) => {
    const imgPath = `https://metapercept.com/${data.ImageUrl}`
    console.log(imgPath)
  return (
   <div className='col'>
     <div className="card bg-light border border-0 shadow-sm" style={{ height:'420px' }}>
         <div className="card-img w-100 d-flex align-items-center justify-content-center p-0">
            <img style={{height:'200px', width:'400px'}} src ='src/assets/not.png'alt="" />
          </div>
          <div className='mt-2 p-3'>
            <h4 className='fs-6'>{data.Name}</h4>
            <p>
              {data.ShortDesc}
            </p>
            <button className='btn btn-outline-dark'><a href={data.ID} className='text-dark text-decoration-none'>View</a></button>
          </div>
    </div>
   </div>
  )
}

export default Card