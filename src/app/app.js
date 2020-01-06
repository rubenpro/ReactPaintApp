import React from 'react';
import WelcomeMessage from './welcome/WelcomeMessage';

const App = () => {
  return (
    <div id="app">
      <h2>App Component!</h2>
      <WelcomeMessage imgPath="https://picsum.photos/200" />
    </div>
  );
};

export default App;
