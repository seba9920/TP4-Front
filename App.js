import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Tab2 from './components/Tab2';
import Home from './components/Home';
import Login2 from './components/login';
import Personajes from './components/Personajes';
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class stackN extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Profe por favor apruébeme, hice mi mayor esfuerzo jaja</Text>
      </View>
    );
  }
}

export class Navegation extends React.Component{
  render(){
    return(
      
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'stackN') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'email' : 'email';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })} >
        <Tab.Screen name="stackN" component={stackN} options={ {title: 'Tab1'}}/>
        <Tab.Screen name="Tab2" component={Tab2}/>
      </Tab.Navigator>

      
    );
  }
}

export default class Login extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={ {headerStyle:{backgroundColor: '#DB4437'},headerTitleStyle:{color: "white"}} }>
            <Stack.Screen name="Login" component={Login2}/>
            <Stack.Screen name="Home" component={Home} options={ {headerLeft: null}}/>
            <Stack.Screen name="Personajes" component={Personajes} options={ {title: 'Personajes',
              headerStyle:{backgroundColor: '#f3627f'}} }/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
