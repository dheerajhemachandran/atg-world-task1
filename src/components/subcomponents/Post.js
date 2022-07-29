import React from 'react'

const Post = ({arr}) => {
    console.log(arr)
  return (
    <div class="card p-5">
        <img src={arr.pic} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{arr.topic}</h5>
            <div className="row mt-5">
                <div className="col-11">
            <h2 class="card-title">{arr.title}</h2></div>
            
            <div className="col-1">
            <div class="dropdown">
                <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    ...
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Report</a></li>
                    <li><a class="dropdown-item" href="#">Option3</a></li>
                </ul>
                </div>
            </div>
            </div>
            {arr.type===1?
            <div className="type1 mt-5">
            <p class="card-text">{arr.subtitle}</p>
            
            </div>:

            <div className="type2 container mt-5">
                <div className="row">
                    <p className='col-5'>{arr.date}</p>
                    <p className='col-7'>{arr.location}</p>
                    
                </div>
                <button className='btn btn-light block' >visit webiste</button>
            
            </div>}

            <div className="container">
            <div className="row mt-5">
                    <h6 className='col-8'><img src={arr.profile} /> { arr.name}</h6>
                    <div className='col-4 d-flex align-items-center'>

                    <p className=' d-none d-lg-block p-5'>{arr.views}</p>
                    
                    <button className=' btn border border-3 ' ><i class="fa-solid fa-share-nodes"></i><span className='d-lg-none'> share</span></button>
                    </div>
                    
                </div>
            </div>

            
            
        </div>
        </div>
  )
}

export default Post
