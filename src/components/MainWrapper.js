import React from 'react';
/* eslint-disable */
import styles from '../styles/MainWrapper.module.scss';

const MainWrapper = (props) => {
  const { children } = props;
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default MainWrapper;
