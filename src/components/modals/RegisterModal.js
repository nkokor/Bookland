import React from "react";

import '../../style/RegisterModal.css';

import { useState } from "react";

function RegisterModal({setOpenRegisterModal}) {

  const [openLogin, setOpenLogin] = useState(false)

  return (
    <div className='modal-bg'>

      <div className='modal-container' id='register-modal'>

        <button className="modal-close"
                onClick={() => setOpenRegisterModal(false)}>
          <img src='images/icons/icons8-close-24.png'></img>
        </button>

        { openLogin ? ( 
            <div id='login'>

              <div className='title-container'>
                <p>Sign in</p>
              </div>

              <div className='form-container'>

                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>

                <button className='login-button'>Sign in</button>

                <p className="info-p">Or</p>

                <button className="google-button">
                  <img src='images/icons/icons8-google-96.png'></img>
                  <p>Sign in with Google</p>
                </button>

                <div className='info-div'>
                  <p className="info-p">Don't have an account?</p>
                  <a id='log-in-link' 
                    onClick={ () => { setOpenLogin(false)} }>Register</a>
                </div> 

              </div>

            </div>
        ) : (
            <div id='register'>

              <div className='title-container'>
                <p>Sign up</p>
              </div>

            <div className='form-container'>

              <input type="text" placeholder="Name"></input>
              <input type="text" placeholder="Email"></input>
              <input type="text" placeholder="Username"></input>
              <input type="text" placeholder="Password"></input>

              <button className='login-button'>Sign up</button>

              <p className="info-p">Or</p>

              <button className="google-button">
                <img src='images/icons/icons8-google-96.png'></img>
                <p>Sign in with Google</p>
              </button>

              <div className='info-div'>
                <p className="info-p">Already have an account?</p>
                <a id='log-in-link' 
                  onClick={ () => { 
                    setOpenLogin(true)
                  } }>Log in</a>
              </div> 

            </div>
            
          </div>
        ) 
      }
        
        </div>

    </div>
  )
}

export default RegisterModal