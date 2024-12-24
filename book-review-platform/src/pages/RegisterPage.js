import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
     Username: "",
    Email: "",
    password: "",
    datejoined: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/login");
    } catch (error) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name=" Username"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="Email"
            name="Email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date Joined</label>
          <input
            type="datejoined"
            name="datejoined"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
