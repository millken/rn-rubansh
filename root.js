import React from 'react';

import Home from './pages/home';
import List from './pages/list'
import Detail from './pages/detail'
import Custom from './pages/custom'
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
  Custom: {
    screen: Custom,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Custom',
});

export default root