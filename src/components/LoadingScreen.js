import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <div className="bounce bounce1" />
        <div className="bounce bounce2" />
        <div className="bounce" />
      </div>
    </div>
  );
};

export default LoadingScreen;
