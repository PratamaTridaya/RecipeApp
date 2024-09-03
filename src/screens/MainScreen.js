import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeListScreen from "./RecipeListScreen";
import SavedRecipeScreen from "./SavedRecipeScreen";
import ScanRecipeScreen from "./ScanRecipeScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{
          title: "Recipes",
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={size}
              color={color}
            ></Ionicons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ScanRecipeScreen"
        component={ScanRecipeScreen}
        options={{
          title: "Scan",
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "scan-circle" : "scan-circle-outline"}
              size={size}
              color={color}
            ></Ionicons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SavedRecipeScreen"
        component={SavedRecipeScreen}
        options={{
          title: "Saved",
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={size}
              color={color}
            ></Ionicons>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainScreen;
