import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import login from '../images/loginbg3.jpg'
import axios from "axios"
export const Signup = () => {
    const navigate=useNavigate();
    const[name,setName]=useState("")
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")
    const[num,setNum]=useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(pass==cpass){
            const register=async()=>{
                const response=await axios.post("http://localhost:8000/api/auth/register",{
                    username:name,
                    email:mail,
                    password:pass,
                    confirmpassword:cpass,
                    contact:num
                })
                console.log(response);
                navigate('/login')
            }
            register();
            
        }
        else{
            alert("Enter the Password correctly")
        }
    }
  return (
    <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
            <div className="LoginFormContainer">
                <div className="LoginFormInnerContainer">
                    <header className="header">Create Your Account</header>
                    <header className="subHeader">Welcome to <b>VASAVI MAHAL!</b> Create your account</header>
                    <p>Aldready Have an Account,  <Link to="/login">Sign in</Link></p>
                    <form>
                        <div className="inputContainer">
                            <label className="label" ><span>Name</span></label>
                            <input type="email" className="input" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="inputContainer">
                            <label className="label" ><span>Email
                                    Address</span></label>
                            <input type="email" className="input" onChange={(e)=>setMail(e.target.value)} placeholder="Enter your Email Address"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Password</span></label>
                            <input type="password" className="input" onChange={(e)=>setPass(e.target.value)} placeholder="Enter your Password"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Confirm Password</span></label>
                            <input type="password" className="input" onChange={(e)=>setCpass(e.target.value)} placeholder="Enter your Password"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Contact Number</span></label>
                            <input type="password" className="input" onChange={(e)=>setNum(e.target.value)} placeholder="Enter your Contact number"/>
                        </div>
                        <button className="LoginButton" onClick={submit}>Signup</button>
                    </form>
                </div>
            </div>
            <div className="ImageContianer">
                <img src={login} class="GroupImage"/>
            </div>
        </div>
        </div>  
  )
}
