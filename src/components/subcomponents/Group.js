import React from 'react'

const Group = ({group}) => {
  return (
    <div className='group row py-3'>
      <div className="col-3">

      <img src={group.pic} alt="" />
      </div>
      <div className="col-4">

      <h1 className='fs-4 fw-normal'>{group.name}</h1>
      </div>
      <div className="col-5">

      <button className='btn btn-light rounded-pill'>follow</button>
      </div>


        
      
    </div>
  )
}

export default Group
