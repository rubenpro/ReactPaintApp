import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
      background-color: ${props => (props.bgDarkGrey ? 'darkgrey' : 'white')};
  }
  #app {
    margin: 0.3em;
  }
`;

export default GlobalStyle;
