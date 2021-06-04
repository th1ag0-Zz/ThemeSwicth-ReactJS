import React from 'react';

import { Container, Bar } from './styles';

interface Props {
  width: string;
}

const BoxItem: React.FC<Props> = ({ width }) => {
  return (
    <Container width={width}>
      <Bar width="40" />
      <Bar width="75" />
      <Bar width="62" />
    </Container>
  );
}

export default BoxItem;