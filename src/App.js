import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './components/pages';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
        </div>
      </div>
    </div>
  );
}

export default App;
