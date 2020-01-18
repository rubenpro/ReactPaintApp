import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormatGrid from '../../../utilities/FormatGrid';

const BrushColorContainer = styled.div`
  display: ${props => (props.inlineGrid ? 'inline-grid' : 'block')};
  grid-template-columns: ${props => (props.columns > 1 ? FormatGrid(props.columns) : 'none')};
  margin: 0.5em 0;
`;

export default BrushColorContainer;

BrushColorContainer.propTypes = {
  columns: PropTypes.number.isRequired,
};
