import React from 'react';
import WelcomeMessage from './welcome/WelcomeMessage';
import GlobalStyle from './GlobalStyles';
import CanvasApp from './canvas/CanvasApp';

const App = () => {
  return (
    <div id="app">
      <GlobalStyle bgDarkGrey />
      <CanvasApp />
      <WelcomeMessage imgPath="https://picsum.photos/200" />
    </div>
  );
};

export default App;
