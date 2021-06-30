import React from 'react';
import Logo from '@image/logo/drop-image-logo.png';
import TextLogo from '@image/logo/drop-text-logo.svg';

const App = () => {
  return (
    <h1>Hello
      <img src={Logo} alt="" /><img src={TextLogo} alt="" />
    </h1>
  );
};

export default App;
