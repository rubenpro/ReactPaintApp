import styled from 'styled-components';
import FormatGrid from '../../../utilities/FormatGrid';

const BrushColorContainer = styled.div`
  display: ${props => (props.inlineGrid ? 'inline-grid' : 'block')};
  grid-template-columns: ${props => (props.columns ? FormatGrid(props.columns) : 'none')};
  margin: 0.5em 0;
`;

export default BrushColorContainer;
