import React from "react";

const ToggleInfo = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Ẩn thông tin" : "Hiển thị thông tin"}
      </button>
      {isVisible && (
        <p>
          Chào mừng bạn đến với React! Đây là đoạn văn bản được điều khiển bởi state `useState`.
        </p>
      )}
    </div>
  );
};

export default ToggleInfo;
