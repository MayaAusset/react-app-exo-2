import React from 'react';
import styles from '../styles/MainWrapper.module.scss';
import UiDropdown from './UI/Dropdown';

const MainWrapper = (props) => {
  const { orgUnits, filters, updateFilters, children } = props;
  return (
    <>
      <header>
        <p>Filters</p>
        <UiDropdown data={orgUnits} filters={filters} updateFilters={updateFilters} />
      </header>
      {children}
    </>
  );
};

export default MainWrapper;
