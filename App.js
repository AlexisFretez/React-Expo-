import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import UsersList from "./screens/UsersList";

import CreateUserScreen from "./screens/CreateUserScreen";

import UserDetailScreen from "./screens/UserDetailScreen";
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Lista Usuarios" }}
      ></Stack.Screen>
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Crear Nuevo Usuario" }}
      ></Stack.Screen>

      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Detalle Usuario" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
