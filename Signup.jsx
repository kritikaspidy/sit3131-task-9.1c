import Input from "./Input"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {createAuthUserWithEmailAndPassword, createuserdocfromAuth} from './utils/firebase'
function Signup() {

  const navigate = useNavigate();
  const [contact, setcontact] =useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const {displayName,email,password,confirmPassword} =contact
  console.log(contact)
  async function handleClick(event)

  {
   if(password!==confirmPassword)
   {  
    alert('password does not match')
    return;
   }

   if (!displayName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    try{
    const {user} = await createAuthUserWithEmailAndPassword(email,password)
  
    console.log(user)
    navigate("/")
    } 
    catch(error){
    console.log('error in creation', error.message)
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    
    <div className="Login" >
      <p>Create a Dev@Deakin account</p>

      <div className="main">
        <div className="d">
            <p>Name</p>
            <Input
              name = 'displayName'
              type='text'
              placeholder='Enter name'
              onChange ={handlepass}
              />
        </div>
            <br></br>

        <div className="d">
          <p>Email</p>
            <Input
              name = 'email'
              type='email'
              placeholder='Enter email'
              onChange ={handlepass}
              />
        </div>
            <br></br>
        
        <div className="d1">
            <p>Password</p>
            <Input
              name= 'password'
              type='password'
              placeholder='Enter password'
              onChange ={handlepass}
              />
        </div>
            <br></br>
          <div className="d1">
            <p>Confirm</p> 
              <Input
                name= 'confirmPassword'
                type='password'
                placeholder='confirm Password'
                onChange ={handlepass}
                />
          </div>
            <br></br>
            
            <button onClick={handleClick} className="btn">Signup</button>
      </div>
    </div>
)}
export default Signup