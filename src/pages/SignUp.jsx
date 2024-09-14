import { useState } from "react"
import { useNavigate } from "react-router-dom"
const SignUp = () => {
    const navigate = useNavigate()
    const [useDetails,setUserDetails] = useState({
        name : '',
        password : '',
        email : '',
        phoneNumber : ''
    })

    const handleFunction = (e) => { 
        setUserDetails((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        })
    }
    const handleSignUp = () => {
        localStorage.setItem("userDetails", JSON.stringify(useDetails))
        navigate('/login')
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
        <input
          name="email"
          type="email"
          value={useDetails.email}
          onChange={handleFunction}
        />
        <input
          name="phoneNumber"
          type="number"
          value={useDetails.phoneNumber}
          onChange={handleFunction}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    )
}
export default SignUp