import React from 'react';
import styles from '../../styles/Dropdown.module.scss';

const UiDropdown = (props) => {
  const { data } = props;

  const changeHandler = (clickedUnit) => {
    console.log('[MAYA LOG] 🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋', clickedUnit)
  }

  return (
    <div>
      <select className={styles.wrapper}>
        <option value="none" selected disabled hidden>
          Org Units
        </option>
        {data.map((unit, index) => {
          return (
            <option key={index} value={`${unit}`} onChange={() => changeHandler(unit)}>
              {unit}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default UiDropdown;
