import React from 'react';
import TextLabel from './TextLabel';
import '../styles/ErrorScreen.css';

const ErrorScreen = () => (
  <div className="error-screen">
    <TextLabel transKey={'loading.error'} />
  </div>
);

export default ErrorScreen;
