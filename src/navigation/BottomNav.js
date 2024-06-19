import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import Maps from "../screens/Maps";
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={focused ? 28 : 20}
              color={focused ? "red" : "gray"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "red" : "gray" }}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={focused ? 28 : 20}
              color={focused ? "red" : "gray"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "red" : "gray" }}>Maps</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
