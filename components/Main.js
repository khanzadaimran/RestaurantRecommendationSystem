import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Menu from './Menu';
import Booking from './Booking';
import Check from './Check';
import Booking_Details from './Booking Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign,Entypo, FontAwesome5, FontAwesome,Feather } from '@expo/vector-icons';
import Search  from './Search'
import  Fast from './Fast';

const Authstack=createStackNavigator();

export default function Main() {
    return(
        <NavigationContainer>
          <Authstack.Navigator>
         
          <Authstack.Screen name="Login" component={Login} options={{headerShown:false}}  />
          <Authstack.Screen name="Home" component={Home} options={{headerShown:false}}  />
          <Authstack.Screen name="Search" component={Search} options={{headerShown:false}}  />
          <Authstack.Screen name="Fast" component={Fast} options={{headerShown:false}}  />
          <Authstack.Screen name="Check" component={Check} options={{headerShown:false}}  />
          <Authstack.Screen name="Booking Details" component={Booking_Details} options={{headerShown:false}}  />
         
         
        </Authstack.Navigator>
        </NavigationContainer>
          )
        
      
    }
    
    

