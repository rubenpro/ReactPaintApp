import styled from 'styled-components';

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  justify-content: ${props => (props.horizontal ? 'space-evenly' : 'flex-start')};
`;

export default FeatureContainer;
