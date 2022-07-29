import React from 'react'

const Header = ({grouped,setgrouped}) => {
  return (
    <div className='header'>
      <div className='d-flex justify-content-start align-items-start pt-5 color-overlay'>
      <i class="fa-solid fa-arrow-left ps-4 pt-4"></i>
      </div>
      <div className='d-flex justify-content-end align-items-start pt-5 pe-3 color-overlay'>
      <button onClick={()=>setgrouped(!grouped)} type="button" class="btn border text-white mt-4">
        {grouped===false?"Join Group":"Leave Group"}
      </button></div>
      <div className='d-flex justify-content-start align-items-end color-overlay'>
         <h1 className='title'>Computer Engineering</h1>
      </div>
      <div className='d-flex justify-content-start align-items-end color-overlay'>
         <p className='sub'>142,765 Computer Engineers follow this</p>
      </div>
         
    
    </div>
  )
}

export default Header
