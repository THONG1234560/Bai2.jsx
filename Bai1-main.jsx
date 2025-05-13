import React from "react";
import Bai1props from "./Bai1props";

export default function Bai1() {
  const users = [
    { 
      title:"Danh sách người dùng",
      name: "Nguyễn Văn A",
      age: 21,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Trần Thị B",
      age: 22,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Lê Văn C",
      age: 23,
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <Bai1props key={index} {...user} />
      ))}
    </div>
  );
}
