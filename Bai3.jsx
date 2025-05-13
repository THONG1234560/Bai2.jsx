import React, { useState } from 'react';
import './Bai3.css';

export default function Bai3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Họ và tên</label><br />
        <input type='text' id='name' placeholder='Nhập họ tên' value={formData.name} onChange={handleChange} /><br />

        <label htmlFor="email">Email</label><br />
        <input type='text' id='email' placeholder='Nhập email' value={formData.email} onChange={handleChange} /><br />

        <label htmlFor="age">Tuổi</label><br />
        <input type='number' id='age' placeholder='Nhập tuổi' value={formData.age} onChange={handleChange} /><br /><br />

        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}
