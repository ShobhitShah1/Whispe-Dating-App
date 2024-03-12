import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={SignUp} name="SignUp" />
        <Stack.Screen component={Login} name="Login" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
