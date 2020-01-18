import React from 'react';
import GlobalStyle from './GlobalStyles';
import CanvasApp from './canvas/CanvasApp';

const App = () => {
  return (
    <div id="app">
      <GlobalStyle bgDarkGrey />
      <CanvasApp />
    </div>
  );
};

export default App;
