import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "../components/navigation/DrawerNavigator";

function Main()
{
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Main;