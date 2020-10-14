import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";
import ListPage from "../../screens/ListPage";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListPage" component={ListPage} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };