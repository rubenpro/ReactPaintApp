import styled from 'styled-components';

const BrushColorPicker = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.brushColor ? props.brushColor : 'none')};
  border-radius: 100%;
  display: inline-block;
  margin: 0.25em;
  cursor: pointer;
  &.selected::before {
    content: '\\2714';
    color: white;
    font-size: 12px;
    position: relative;
    left: 5px;
    top: 1px;
  }
`;

export default BrushColorPicker;
