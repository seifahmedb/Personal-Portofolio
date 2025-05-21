import React, { useState, useEffect } from 'react';

const Name = () => {
  const [translate, setTranslate] = useState('-100%');

  useEffect(() => {
    setTranslate('0');
  }, []);

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '532px',
    marginLeft: '100px',
    marginTop: '90px',
    transform: `translateX(${translate})`,
    transition: 'transform 0.7s ease-in-out',
  };

  const nameStyle = {
    color: 'black',
    fontSize: '70px',
    fontWeight: 'bold',
    marginBottom: '-5px',
  };

  return (
    <div style={divStyle}>
      <h1 style={nameStyle}>Hi, I am</h1>
      <h1 style={nameStyle}>Seif Talaat</h1>
    </div>
  );
};

export default Name;
