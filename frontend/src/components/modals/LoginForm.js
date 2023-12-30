export default function LoginForm ({setViewLogin}) {
  return (
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
          <a className='login-link' 
            onClick={ () => { setViewLogin(false)} }>Register</a>
        </div> 
      </div>
    </div>
  )
}