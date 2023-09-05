import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import UploadScreen from "./screen/UploadScreen";
import HomeScreen2 from "./screen/HomeScreen2";
import CameraScreen from "./screen/CameraScreen";
import BodySketchScreen from "./screen/BodySketchScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, VStack, Text } from "@gluestack-ui/themed";
import dayjs from "dayjs";

let Stack = createNativeStackNavigator() as const;

const initialRouteName = "Index";
// const initialRouteName = "Upload";

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="Index" component={TabNavigator} />

      <Stack.Group
        screenOptions={({ route, navigation }) => {
          return { title: "", headerShown: false };
        }}
      >
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={({ route, navigation }) => {
          return {
            title: route?.params?.uri || "Upload",

          headerTitleAlign: "center",
            headerShown: true,
          };
        }}
      >
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{
            headerTitle: (props) => {
              return (
                <VStack justifyContent="center" alignItems="center">
                    <Box>
                        <Text size="lg" bold>25832</Text>
                    </Box>
                    <Box>
                        <Text>{dayjs().format("MM-DD-YY hh:mm")}</Text>
                    </Box>
                </VStack>
              );
            },
            headerRight: (...args) => {
              return (
                <MaterialCommunityIcons
                  name="trash-can"
                  color="grey"
                  size={32}
                  onPress={() => {}}
                />
              );
            },
          }}
        />
        <Stack.Screen name="Index2" component={HomeScreen2} />
      </Stack.Group>

      <Stack.Group
        screenOptions={({ route, navigation }) => {
          return { title: "Body", headerShown: true };
        }}
      >
        <Stack.Screen
          name="BodySketch"
          options={() => ({
            title: "Select location",
            headerRight: (...args) => {
              return (
                <MaterialCommunityIcons
                  name="cached"
                  color="grey"
                  size={32}
                  onPress={() => {}}
                />
              );
            },
          })}
          component={BodySketchScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default StackNavigator;
