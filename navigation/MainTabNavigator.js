import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import SampleScreen from '../screens/SampleScreen';
import LibraryScreen from '../screens/LibraryScreen';

const SampleStack = createStackNavigator({
  Sample: SampleScreen,
});

SampleStack.navigationOptions = {
  tabBarLabel: 'Sample',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-bookmark${focused ? '' : '-outline'}` : 'md-bookmark'}
    />
  ),
};

const LibraryStack = createStackNavigator({
  Library: LibraryScreen,
});

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-book${focused ? '' : '-outline'}` : 'md-book'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}` : 'md-person'
      }
    />
  ),
};

export default createBottomTabNavigator({
  SampleStack,
  LibraryStack,
  ProfileStack,
});
