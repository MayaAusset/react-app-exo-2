import React from 'react';
import styles from '../styles/MainWrapper.module.scss';
import UiDropdown from './UI/Dropdown';

const MainWrapper = (props) => {
  const { orgUnits, filters, setFilters, children } = props;
  return (
    <>
      <header>
        <p>Filters</p>
        <UiDropdown data={orgUnits} filters={filters} setFilter={setFilters} />
      </header>
      {children}
    </>
  );
};

export default MainWrapper;
