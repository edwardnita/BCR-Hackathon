import React from 'react';
import { useLocation } from 'react-router-dom';

const Landing = () => {
  const { state } = useLocation();
  const message = state['message'];

  return <div>{message}</div>;
};

export default Landing;
