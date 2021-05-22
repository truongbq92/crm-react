import React from 'react';
//React navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../login/Login';
import Main from './../components/main/Main';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#1F2937',
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
