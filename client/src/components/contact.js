
import React,{useState} from 'react'
import '../css/contact.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Contact = () => {
    const navigate=useNavigate();
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [subject,setSubject]=useState("")
    const [message,setMessage]=useState("")
    const [sent,setSent]=useState("false")
    const submit=(e)=>{
        e.preventDefault();
        const contact=async()=>{
            const response=await axios.post("http://localhost:8000/api/contact/query",{
                name:name,
                email:mail,
                subject:subject,
                message:message
            })
            console.log(response);
            setSent("true");
        }
        contact();
    }

  return (
    <div>
    <section class="ftco-section">
        <div class="container">
            
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12">
                    <div class="wrapper">
                        <div class="row no-gutters">
                            <div class="col-md-7 d-flex align-items-stretch">
                                <div class="contact-wrap w-100 p-md-5 p-4">
                                    <h3 class="mb-4">Get in touch</h3>
                                    <div id="form-message-warning" class="mb-4"></div> 
                            <div id="form-message-success" class="mb-4">
                            {sent=="true"?<p>Your message was sent, thank you!</p>:""}
                            </div>
                                    <form onSubmit={submit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="name" id="name" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6"> 
                                                <div class="form-group">
                                                    <input type="email" class="form-control" name="email" id="email" onChange={(e)=>setMail(e.target.value)} placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="subject" id="subject" onChange={(e)=>setSubject(e.target.value)} placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea name="message" class="form-control" id="message" cols="30" rows="7" onChange={(e)=>setMessage(e.target.value)} placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="submit" value="Send Message" class="btn btn-primary"/>
                                                    <div class="submitting"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-5 d-flex align-items-stretch">
                                <div class="info-wrap bg-primary w-100 p-lg-5 p-4">
                                    <h3 class="mb-4 mt-md-4">Contact us</h3>
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-map-marker"></span>
                                </div>
                                <div class="text pl-3">
                                <p><span>Address:</span>No.8,southcar street,palani-624601.</p>
                              </div>
                          </div>
                            <div class="dbox w-100 d-flex align-items-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-phone"></span>
                                </div>
                                <div class="text pl-3">
                                <p><span>Phone number:</span><a href="tel://1234567920">+91 9842942853</a></p>
                              </div>
                          </div>
                            <div class="dbox w-100 d-flex align-items-center">
                                <div class="icon d-flex align-items-center justify-content-censter">
                                    <span class="fa fa-paper-plane"></span>
                                </div>
                                <div class="text pl-3">
                                <p><span>Email:</span><a href="mailto:info@yoursite.com">palanivasavimahal@gmail.com</a></p>
                              </div>
                          </div>
                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}