import React from "react";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./src/navigation/StackNavigator";
import theme from "./src/theme";

export default function App() {
  return (
      <GluestackUIProvider config={theme}>
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
      </GluestackUIProvider>
  );
}
