import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen2 from "./screen/HomeScreen2";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SearchIcon } from "@gluestack-ui/themed";
import { PRIMARY_COLOR } from "../theme";
import Inbox from "./screen/Inbox";
import MyFiles from "./screen/MyFiles";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inbox"
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "white",
          borderBottomColor: "#c4c4c4",
          borderBottomWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          title: "Inbox",
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="inbox" color={color} size={size} />
          ),
          headerRight: () => <SearchIcon name="inbox" color={"lg"} size={10} />,
        }}
      />
      <Tab.Screen
        name="My Files"
        component={MyFiles}
        options={{
          title: "My Files",
          tabBarLabel: "My Files",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="folder-multiple-image"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        component={HomeScreen2}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
