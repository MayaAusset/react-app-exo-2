import React, { useEffect, useState } from 'react';
import styles from '../../styles/Dropdown.module.scss';
import Select from 'react-select';

const UiDropdown = (props) => {
  const { data, filters, updateFilters } = props;

  const [selectedUnit, setSelectedUnit] = useState('');
  const [options, setOptions] = useState([]);

  const onChange = (value) => {
    setSelectedUnit(value);
    updateFilters({ ...filters, selectedUnit: value.label });
  };

  useEffect(() => {
    const getOptions = async () => {
      try {
        const optionsArray = [];
        data.forEach((unit) => {
          optionsArray.push({ value: unit, label: unit });
        });
        setOptions(optionsArray);
      } catch (error) {
        console.log('error', error);
      }
    };
    getOptions();
  }, [data]);

  return (
    <div>
      <Select
        placeholder={'Org Units'}
        value={selectedUnit}
        className={styles.select}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </div>
  );
};

export default UiDropdown;
