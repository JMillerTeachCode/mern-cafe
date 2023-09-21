import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'

function AuthPage(props) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage