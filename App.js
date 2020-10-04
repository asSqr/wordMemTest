/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Scene,
  Router,
} from 'react-native-router-flux';
import Home from './components/Home';
import Test from './components/Test';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" initial component={Home} title="Home" />
        <Scene key="test" component={Test} title="Test" />
      </Scene>
    </Router>
  )
}

export default App;
