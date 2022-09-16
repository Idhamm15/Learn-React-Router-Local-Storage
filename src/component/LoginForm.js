import './LoginForm.css'
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const navigate = useNavigate()

  function submitLogin(event) {
    event.preventDefault()
    localStorage.setItem('token', 'adaTokenNih')
    navigate('/')
  }

  return (
    <form id="form" onSubmit={(event) => submitLogin(event)}>
      <h1>Login Form</h1>
      <label htmlFor='username'>Username</label>
      <input id='username' type="text" />
      <label htmlFor='password'>Password</label>
      <input id='password' type="password" />
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default LoginForm;