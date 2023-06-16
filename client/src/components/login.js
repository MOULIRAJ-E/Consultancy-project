import React,{useState,useCallback} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './utils/Authentication';
import login from '../images/loginbg3.jpg'
import "../css/login.css"
export const Login = () => {
    const navigate=useNavigate()
    const auth=useAuth()
    const location=useLocation();
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[flag,setFlag]=useState(-1)
    // const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   }, [todos]);
      const showpassword=useCallback(
        () => {
            var x=document.getElementById("showpass");
            x.type=="password"?x.type="text":x.type="password"
        },
        [pass]
      )
    // const showpassword=()=>{
    //     var x=document.getElementById("showpass");
    //     x.type=="password"?x.type="text":x.type="password"
    // }
    const submit=(e)=>{
        e.preventDefault();
        const login=async()=>{
            const response=await axios.post("http://localhost:8000/api/auth/login",{
                email:mail,
                password:pass,
            })
            console.log(response)
            // const json=await response.json();
            // console.log(json);
            if(response.data.msg==="sucess"){
                alert("success")
                console.log(response.data.data[0].username);
                auth.login(response.data.data[0].username,response.data.data[0].contact);
                setFlag(1)
                navigate(location.state?location.state.path:"/",{replace:true});
            }
            else{
                setFlag(0);
                navigate("/login")
            }
            
        }
        login();
    }
    
  return (
        <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
            <div className="LoginFormContainer">
                <div className="LoginFormInnerContainer">
                    <header className="header">Login to Your Account</header>
                    <header className="subHeader">Welcome to <b>VASAVI MAHAL!</b></header>
                    <p>Don't Have an Account?  <Link to="/signup">Sign Up</Link></p>
                    <form>
                        <div className="inputContainer">
                            <label className="label" ><span>Email
                                    Address</span></label>
                            <input type="email" className="input" onChange={(e)=>setMail(e.target.value)} placeholder="Enter your Email Address"/>
                        </div>
                        <div className="inputContainer">
                            <label className="label"><span>Password</span></label>
                            <input type="password" className="input" onChange={(e)=>setPass(e.target.value)} placeholder="Enter your Password"/>
                        </div>
                        <button className="LoginButton" onClick={submit}>Login</button>
                    </form>
                </div>
            </div>
            <div className="ImageContianer">
                <img src={login} class="GroupImage"/>
            </div>
            {flag==1?<div></div>:(flag==0)?<p>Enter details correctly</p>:""}
        </div>
        </div>  

  )
}


