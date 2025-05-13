import React from "react";

export default function Bai1props({ title,name, age, avatar }) {
  return (
    
    <div>
      <h1>{title}</h1>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>Tuổi: {age}</p>
      <hr></hr>
    </div>
  );
}

















