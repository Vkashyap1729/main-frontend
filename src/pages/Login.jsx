import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [useDetails, setUserDetails] = useState({
      name: '',
      password: '',
    })
    const handleFunction = (e) => {
      setUserDetails((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      })
    }
    const handleLogin = () => {
        const savedUserDetails =
          JSON.parse(localStorage.getItem('userDetails'))
        if(useDetails.name === savedUserDetails.name && useDetails.password === savedUserDetails.password){
            navigate('/main')
        }else{
            window.alert('Invalid Credentials.')
        }
    } 
    return (
      <div>
        <input
          name="name"
          type="text"
          value={useDetails.name}
          onChange={handleFunction}
        />
        <input
          name="password"
          type="password"
          value={useDetails.password}
          onChange={handleFunction}
        />
        <div>{useDetails.name}</div>
        <div>{useDetails.password}</div>

        <button onClick={handleLogin}>Login</button>
      </div>
    )
}
export default Login