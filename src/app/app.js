import React from 'react';
import WelcomeMessage from './welcome/WelcomeMessage';
import GlobalStyle from './GlobalStyles';
import Canvas from './canvas/Canvas';

const App = () => {
  return (
    <div id="app">
      <GlobalStyle bgDarkGrey />
      <WelcomeMessage imgPath="https://picsum.photos/200" />
      <Canvas />
    </div>
  );
};

export default App;
