import React from 'react';

import { NUMBERS } from '../../typings';
import { Container } from './styles';
import Button from './button';

interface NumbersProps {}

const Numbers: React.FC<NumbersProps> = () => (
  <Container>
    {(Array.from({ length: 9 }, (_, index) => index + 1) as NUMBERS[]).map(
      (value) => (
        <Button key={value} value={value}></Button>
      )
    )}
  </Container>
);

export default Numbers;
