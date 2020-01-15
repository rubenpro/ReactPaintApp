/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em;
`;

const SectionContainer = props => <Section>{props.children}</Section>;

export default SectionContainer;
