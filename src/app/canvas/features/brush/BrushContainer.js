import styled from 'styled-components';

const BrushContainer = styled.div`
  cursor: pointer;
  border: 1px solid transparent;
  &.selected {
    border: 1px solid green;
  }
`;

export default BrushContainer;
