import React, { useState,useEffect } from "react";
import { Form, Input, Button,message, Spin } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import '../resources/authentication.css'
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post('/api/user/login', values);
      message.success("Login Successful");
      localStorage.setItem('loginDetails', JSON.stringify(user.data));
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error('Login fail');
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('loginDetails')){
       navigate('/home');
    }
  })

  return (
    <div className="auth-parent">
      {loading && (<Spin size='large'></Spin>)}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>
          Login
        </h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to='/register'>Click here to Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
