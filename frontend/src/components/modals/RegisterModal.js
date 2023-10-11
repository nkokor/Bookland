import React from "react";
import '../../style/modals/Modal.css';
import '../../style/modals/RegisterModal.css';
import '../../style/modals/LoginModal.css';
import { useState } from "react";


function RegisterModal({setOpenRegisterModal}) {

  const [openLogin, setOpenLogin] = useState(false)

  return (
    <div className='modal-bg'>
        { openLogin ? ( 
            <div id='login-modal' className="modal-content-container">
              <button className="modal-close" onClick={() => setOpenRegisterModal(false)}>
                <img src='images/icons/icons8-close-24.png'></img>
              </button>
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
            </div>
        ) : (
          <div id='register-modal' className="modal-content-container">
            <button className="modal-close" onClick={() => setOpenRegisterModal(false)}>
              <img src='images/icons/icons8-close-24.png'></img>
            </button>
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
          </div>
          ) 
        }       
      </div>
  )
}

export default RegisterModal