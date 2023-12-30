export default function RegisterForm({setViewLogin}) {
  return (
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
        <div className='info-div'>
          <p className="info-p">Already have an account?</p>
          <a className='login-link' 
            onClick={ () => { 
              setViewLogin(true)
            } }>Log in</a>
        </div> 
      </div>          
    </div>
  )
}