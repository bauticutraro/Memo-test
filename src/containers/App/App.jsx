import React from 'react';
import GlobalStyles from '../../globalStyles';
import Home from '../Home/Home';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <GlobalStyles />

      <Home />
    </ErrorBoundary>
  );
};

export default App;
