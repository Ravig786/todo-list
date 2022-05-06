import React, { useState, useEffect } from "react";
import { Form, Input, Button,message, Spin, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
function Register() {
  const { Option } = Select;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("/api/user/register", values);
      setLoading(false);
      message.success("Registration Successful");
    } catch (error) {
      console.log(error);
      setLoading(false);
      message.error("Registration fail");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("loginDetails")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {loading && <Spin size="large"></Spin>}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!", type: 'email' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input pattern="[123456789][0-9]{9}"
          />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Gender is required', }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item name="dob" label="DOB" rules={[{ required: true, message: 'Date of birth is required', }]}>
          <Input type="date"/>
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "City is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Password is required', }]}>
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click here to Login</Link>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
