import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchExample } from 'store/actions/main/main';

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchExample());
  };
  return (
    <button type="button" onClick={() => handleClick()}>
      Click
    </button>
  );
};

export default Dashboard;
