import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import  HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ChequingScreen from '../screens/ChequingScreen';
import SavingsScreen from '../screens/SavingsScreen';

export default createAppContainer(
  createStackNavigator({
    Home: {screen: HomeScreen},
    Accounts: {screen: AccountsScreen},
    Chequing:{screen:ChequingScreen},
    Savings:{screen:SavingsScreen}
  })
);


