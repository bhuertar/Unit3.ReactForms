import { useState } from "react"

const SignUp = ({setToken}) => {

  const [nameInput, setNameInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] =useState(null);

  const SignUp_API = 'https://fsa-jwt-practice.herokuapp.com/signup'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SignUp_API, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: "",
            password: ""
          })
      });
      // console.log(response)
      const json = await response.json();
      // console.log(json);
      setToken(json.token)
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:
          <br/>
          <input placeholder="username" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
          <br/>
        </label>
        <label>Password:
          <br/>
          <input placeholder="password" value={passInput} onChange={(e)=> setPassInput(e.target.value)}/>
        </label>
        <br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUp