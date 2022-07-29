import union from './utils/union.svg'
import Path from './utils/Path.svg'
import Oval from './utils/Oval.svg'
import Rectangle from './utils/Rectangle.svg'
import Popup from './subcomponents/Popup';
import Illus from './utils/illustration.jpg'
import main from './utils/profile/mainprofile.png'
import { useState } from 'react';

function Toolbar(props) {
  const [type, settype] = useState(true)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 fixed-top">
    <div class="container-fluid align-items-center justify-content-end px-3">
      
    <div className="d-lg-none">
      <img className='p-2' src={Rectangle}/>
      <img className='p-2' src={Oval}/>
      <img className='p-2' src={Path}/>
    </div>
      
      <div class="collapse navbar-collapse justify-content-start">
        <ul class="navbar-nav">
          <li class="nav-item">
            <h2>ATG.W<span><img src={union} alt="" /></span>RLD</h2>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse  justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="input-group mb-3">
              <input onClick={()=>{settype(!type)}} type="text" class="fontAwesome form-control rounded-pill" placeholder="&#xF002; Search for your favorite groups in ATG" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          {props.log===false ?<div class="dropdown">
          <p className='fs-5'>create account.
          <a onClick={()=>{props.setlog(!props.log)}} class="dropdown-toggle" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
              It's free!
          </a></p>
  

<Popup illus={Illus} type={type}/>
</div>:

<div className='dropdown d-flex align-items-center'>


  <img src={main} alt="main" />
  <h1 onClick={()=>{props.setlog(!props.log)}} className='dropdown-toggle p-2 fw-normal fs-6' >Siddharth Goyal</h1>
</div>
 
  
}
        
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Toolbar;