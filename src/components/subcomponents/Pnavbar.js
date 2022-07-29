import React from 'react'

const Pnavbar = ({grouped,setgrouped}) => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">All Posts(32)</a>
    <button class="dropdown btn btn-light">
      <span className='dropdown-toggler d-lg-none'>Filter ALL:</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Article</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Event</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Job</a>
        </li>
      </ul>
    
    <div className='me-0 ms-auto'>
    <div class="dropdown me-0 ms-auto">
        <button class="btn dropdown-toggle " type="button">
            Write a post
        </button>
        {grouped===false?
            <button onClick={()=>{setgrouped(!grouped)}} class="btn btn-primary ms-10" type="button">
               <i class="fa-solid fa-user-group"></i> Join Group
            </button>:
            <button onClick={()=>{setgrouped(!grouped)}} class="btn btn-light ms-10" type="button">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Leave Group
            </button>
            }


        </div>

    </div>
    </div>
   
 
  </div>
</nav>
  )
}

export default Pnavbar
