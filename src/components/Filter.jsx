import React from 'react';
import { Input, Wrap } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Wrap>
    <span>Фільтр по імені</span>
    <Input type="text" value={value} onChange={onChange} />
  </Wrap>
);

export default Filter;
