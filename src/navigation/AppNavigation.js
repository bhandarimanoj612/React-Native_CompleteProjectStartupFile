import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStorage from "../ContextHook/AuthStorage";
import HomeScreen from "../screens/HomeScreen";
import Route from "./Route";
import Maps from "../screens/Maps";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const authStorage = new AuthStorage();
      const token = await authStorage.getAccessToken();
      setIsLoggedIn(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return null; // You may want to show a loading indicator here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"HomeScreen"}
      >
        <Stack.Screen name="HomeScreen" component={Route} />
        <Stack.Screen name="Maps" component={Maps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
