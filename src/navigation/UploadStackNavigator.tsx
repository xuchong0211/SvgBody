import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import HomeScreen2 from "./screen/HomeScreen2";
import UploadScreen from "./screen/UploadScreen";

const Stack = createNativeStackNavigator();

function UploadStackNavigator(props) {
  console.log("UploadStackNavigator props", props);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="Index1"
    >
      <Stack.Screen name="Index1" component={UploadScreen} />
      <Stack.Screen name="Index2" component={HomeScreen2} />
    </Stack.Navigator>
  );
}

export default UploadStackNavigator;
