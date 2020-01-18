import styled from 'styled-components';

const BrushPicker = styled.div`
  width: calc(100% - 2em);
  height: ${props => (props.brushSize ? props.brushSize : 14)}px;
  background-color: #000000;
  border-radius: 2em;
  display: inline-block;
  margin: 1em;
  cursor: pointer;
`;

export default BrushPicker;
