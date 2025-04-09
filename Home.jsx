// src/pages/Home.jsx
import React from 'react';
import Button from '../Components/Button';

const Home = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      {/* Добавляем кнопку */}
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Home;