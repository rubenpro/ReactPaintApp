/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CanvasContainer = props => <Container>{props.children}</Container>;

export default CanvasContainer;
