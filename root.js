import React from 'react';

import Home from './pages/home';
import List from './pages/list'
import Detail from './pages/detail'
import { createStackNavigator } from 'react-navigation';

const root = createStackNavigator({
  Home: {
    screen: Home,
  },
  List: {
    screen: List,
  },
  Detail: {
    screen: Detail,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default root