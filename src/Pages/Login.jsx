import axios from "axios";
import React, { useEffect, useState,  } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    let token = window.localStorage.getItem("taskToken")
    if(token){
      navigate("/home")
    }
  },[])

  const handleLogin = async () => {

    navigate("/home");

   try {
    const response = await axios.post("https://reqres.in/api/login", {email:email,password:password});
    const data = await response.data;
    console.log(data.token);
    window.localStorage.setItem("taskToken",data.token)
    let token = window.localStorage.getItem("taskToken")
    if(token){
      navigate("/home")
    }
   } catch (error) {
    console.log(error);
    
   }
    

  };



  return (
    <div id="login">
      <Form id="login_Form">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"
       placeholder="Enter email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"
       placeholder="Password" 
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>
   
    <Button variant="primary" onClick={handleLogin}>
      Login
    </Button>
  </Form>
  </div>
  )
}

export default Login ;