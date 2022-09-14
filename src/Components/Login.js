import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './App.scss'

function Login(props) {
  const [loginData, setloginData] = useState({
    email:'',
    password:''
  })

  let handleInputChange=(e)=>
  {
    setloginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }
let navigate= useNavigate()
  let navigateToHomePage=()=>
  {
    if (loginData.email && loginData.password)
    {
      navigate("/home")
      props.getEmailData(loginData.email)
    }else alert("Please enter credentials");
  }

  return (
    <div className="parent_form">
      <Form className="Form_Login" onSubmit={navigateToHomePage}>
        <h1 style={{ textAlign: "center" }}>LOGIN</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login