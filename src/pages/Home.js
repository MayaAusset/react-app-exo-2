import React from 'react';
import { useEffect, useState } from 'react';
import MainWrapper from '../components/MainWrapper';
import ApiService from '../tools/ApiService';

const Home = () => {
  const [message, setMessage] = useState(null);

  const service = new ApiService();

  const getApiMessage = async () => {
    await service
      .getMockApiMessage()
      .then((res) => {
        setMessage(res.message);
      })
      .catch((err) => console.log(`Err at getApiMessage, ${err}`));
  };

  useEffect(() => {
    getApiMessage();
    /* eslint-disable */
  }, []);


  return (
    <MainWrapper>
      <h1>{message}</h1>
    </MainWrapper>
  );
};

export default Home;
