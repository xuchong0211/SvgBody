import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from "./TabNavigator";
import UploadScreen from "./screen/UploadScreen";
import HomeScreen2 from "./screen/HomeScreen2";

let Stack = createNativeStackNavigator() as const;

// const initialRouteName = "Index";
const initialRouteName = "Upload";

function StackNavigator() {
  return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRouteName}>
        <Stack.Screen name="Index" component={TabNavigator} />


          <Stack.Group screenOptions={({ route, navigation }) => {
              console.log("=================================================================", route);
              return {title: route?.params?.uri || "123", headerShown: true}
          }}>
              <Stack.Screen name="Upload" component={UploadScreen} />
              <Stack.Screen name="Index2" component={HomeScreen2} />
          </Stack.Group>

        {/*<Stack.Screen name="Upload" component={UploadStackNavigator} />*/}
      </Stack.Navigator>
  );
}

export default StackNavigator;
