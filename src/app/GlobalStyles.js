import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  body {
      background-color: ${props => (props.bgDarkGrey ? 'darkgrey' : 'white')};
  }
  .bold {
    font-weight: bold;
  }
  #app {
    margin: 0.3em 0;
    font-family: 'Roboto', 'Verdana';
  }
  #myCanvas {
    border: 2px solid black;
  }
`;

export default GlobalStyle;
