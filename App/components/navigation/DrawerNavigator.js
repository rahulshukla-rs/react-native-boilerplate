import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

//import Home from "../../screens/Home";
import TabNavigator from './TabNavigator';
import About from "../../screens/About";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;