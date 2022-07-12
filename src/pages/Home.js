import React from 'react';
import { useEffect, useState } from 'react';
import MainWrapper from '../components/MainWrapper';
import ApiService from '../tools/ApiService';

const Home = () => {
  const [orgUnits, setOrgUnits] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState([]);
  const [filters, setFilters] = useState({ selectedUnit: '', employeesList: [], location: '' });

  const service = new ApiService();

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const getApiMessage = async () => {
    await service
      .getMockApiMessage()
      .then((res) => {
        setMessage(res.message);
      })
      .catch((err) => console.log(`Err at getApiMessage, ${err}`));
  };

  const getOrgUnit = async () => {
    await service
      .getOrgUnits()
      .then((res) => {
        setOrgUnits(res);
      })
      .catch((err) => console.log(`Err at getOrgUnit, ${err}`));
  };

  const getAllEmployees = async () => {
    await service
      .getAllEmployees()
      .then((res) => {
        setEmployees(res);
      })
      .catch((err) => console.log(`Err at getAllEmployees, ${err}`));
  };

  const getEmployeesPerUnit = async (unit) => {
    await service
      .getAllEmployeesPerUnit(unit)
      .then((res) => {
        setEmployees(res);
      })
      .catch((err) => console.log(`Err at getAllEmployees, ${err}`));
  };

  useEffect(() => {
    getOrgUnit();
    getApiMessage();
    if (employees.length === 0) {
      getAllEmployees();
    }
    if (filters.selectedUnit.length) {
      getEmployeesPerUnit(filters.selectedUnit);
    }
  }, [filters]);


  return (
    <MainWrapper orgUnits={orgUnits} filters={filters} updateFilters={updateFilters}>
      <div>
        <h1>{message}</h1>
        {employees.length > 0 &&
          employees.map((em, index) => {
            return <div key={index}>{em.employee_name}</div>;
          })}
      </div>
    </MainWrapper>
  );
};

export default Home;
