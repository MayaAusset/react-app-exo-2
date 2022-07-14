import React from 'react';
/* eslint-disable */
import styles from '../../styles/Button.module.scss'

const Button = (props) => {
  const { onClickEvent, children } = props
  return (
    <button onClick={() => onClickEvent()}>
      {children}
    </button>
  );
};

export default Button;