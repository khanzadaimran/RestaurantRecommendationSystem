import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './component/Login';
import Home from './component/Home';
import Menu from './component/Menu';
import Booking from './component/Booking';
import Check from './component/Check';
import Booking_Details from './component/Booking Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign,Entypo, FontAwesome5, FontAwesome,Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import Search  from './component/Search'
import  Fast from './component/Fast';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Main from './component/Main';
import reducer from './Reducer';



const store=createStore(reducer);

//firebase.initializeApp(firebaseConfig);

//firebase.initializeApp(firebaseConfig);


export default function App() {
  return(  

<Provider store={store}>
  <Main/>
</Provider> 

  )

    
}

