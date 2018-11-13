<<<<<<< HEAD
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

=======
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

>>>>>>> 5617ef869cf31e858473288267164a5182540426
export default root