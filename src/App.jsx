import { useState } from 'react'
import './App.css'
import SignUp from './SignUpForm.jsx'
// import SignUp_API from './SignUpForm.jsx'
import Authenticate from './Authenticate.jsx'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>React Form</h1>
      <SignUp setToken={setToken} />
      <Authenticate token={token}/>
    </>
  )
}

export default App
