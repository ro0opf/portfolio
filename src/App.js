import React from 'react';
import { Wrapper, GlobalStyle } from './App.css.js';
import { Route, Switch } from 'react-router-dom';
import Home from './page/Home.js';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Switch>
        <Route exact path="/portfolio" component={Home} />
      </Switch>
    </Wrapper>
  );
}

export default App;