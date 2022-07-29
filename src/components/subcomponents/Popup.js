import React from 'react'

const Popup = ({illus,type}) => {
  return (
    <>
    {type===false?
<div class="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-success bg-opacity-10 d-flex justify-content-center">
          <h5 class="modal-title text-success fs-6" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="container">
            <div className='row m-2'>
                <div className="col my-3">
                    <h1 className='fs-3 my-4'>Create Account</h1>
                    <div className="row ">
                        <div className="col pe-0">
                          <div class="form-floating ">
                            <input type="text" class="form-control"  placeholder="Firstname"/>
                            <label for="floatingInput">Firstname</label>
                            </div></div>
                        <div className="col ps-0">
                          <div class="form-floating">
                            <input type="text" class="form-control"  placeholder="lastname"/>
                            <label for="floatingInput">lastname</label>
                            </div></div>
                    </div>
                    <div class="form-floating">
                        <input type="email" class="form-control"  placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                        <input type="password" class="form-control"  placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating">
                        <input type="password" class="form-control"  placeholder="Password"/>
                        <label for="floatingPassword">confirm Password</label>
                        </div>
                        <div class="d-grid gap-2">
                        <button class="btn btn-primary my-4 rounded-pill" type="button" >Create Account</button>
                        <button class="btn  my-1 border border-3 " type="button">Sign up with Facebook</button>
                        <button class="btn  my-1 border border-3" type="button">Sign up with Google</button>

                        </div>
                        
                </div>
                <div className="col">
                    <p className='text-end'>
                    Already have an account?
                    <a className='text-primary ms-2' type="button" >Sign In</a> 
                    </p>
                    <div className='d-flex justify-content-center my-5'>
                      <img src={illus} />
                    </div>
                    <p className='fs-6 fw-lighter'>By signing up, you agree to our Terms & conditions, Privacy policy</p>



                </div>

            </div>
           </div>
        
      </div>
    </div>
  </div>:

  <div class="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-success bg-opacity-10 d-flex justify-content-center">
          <h5 class="modal-title text-success fs-6" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="container">
            <div className='row m-2'>
                <div className="col my-3">
                    <h1 className='fs-3 my-4'>Sign In</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control"  placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                        <input type="password" class="form-control"  placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        </div>
                      
                        <div class="d-grid gap-2">
                        <button class="btn btn-primary my-4 rounded-pill" type="button" >Sign In</button>
                        <button class="btn  my-1 border border-3 " type="button">Sign up with Facebook</button>
                        <button class="btn  my-1 border border-3" type="button">Sign up with Google</button>
                        <p className='text-center fw-semibold'>Forgot Password?</p>

                        </div>
                        
                </div>
                <div className="col">
                    <p className='text-end'>
                    Don’t have an account yet?
                    <a className='text-primary ms-2' > Create new for free!</a> 
                    </p>
                    <div className='d-flex justify-content-center my-5'>
                      <img src={illus} />
                    </div>
                    <p className='fs-6 fw-lighter'>By signing up, you agree to our Terms & conditions, Privacy policy</p>



                </div>

            </div>
           </div>
        
      </div>
    </div>
  </div>}
  </>

  
  )
}

export default Popup
