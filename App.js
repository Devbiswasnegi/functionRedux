import React from 'react'
import {View ,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from './src/screen/signIn'
import {Provider} from 'react-redux'
import {store} from './src/store'


 const Stack= createStackNavigator();
export default class App extends React.Component{
  render()
   {
    return(
      <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name='SignIn' component={SignIn}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>


    )
   }
  }
