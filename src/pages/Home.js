import React from 'react';
import { useEffect, useState } from 'react';
import MainWrapper from '../components/MainWrapper';
import UiDropdown from '../components/UI/Dropdown';
import ApiService from '../tools/ApiService';

const Home = () => {
  const [orgUnits, setOrgUnits] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState([]);
  const [filters, setFilters] = useState({ selectedUnit: '', employeesList: [], location: '' });

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
    // if (orgUnits.length === 0) {
    //   getOrgUnit();
    // }
    getApiMessage();
    // getEmployees();
  }, []);

  return (
      <MainWrapper orgUnits={orgUnits} filters={filters} setFilter={setFilters}>
        <h1>{message}</h1>
      </MainWrapper>
  );
};

export default Home;
