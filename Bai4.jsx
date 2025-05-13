import React, { useState } from 'react';

export default function Bai4() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = inputValue.split(''); // Chuyển input thành mảng ký tự
    setResult(array.length);
    console.log(`Số ký tự trong chuỗi: ${array.length}`);
  };

  return (
    <div>
      <h2>Kiểm tra độ dài chuỗi</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' id='q' placeholder='Mời bạn nhập vào 1 chuỗi' value={inputValue} onChange={handleChange} />
        <button type="submit">Gửi</button>
      </form>
      {result !== null && <p>Độ dài chuỗi bạn nhập: {result}</p>}
    </div>
  );
}
