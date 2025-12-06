import React from 'react';
import { Box } from './Info.styled';

const Info = ({ total, completed }) => (
  <Box>
    <p>Всього завдань: {total}</p>
    <p>Виконано: {completed}</p>
  </Box>
);

export default Info;
