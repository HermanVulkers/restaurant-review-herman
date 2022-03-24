import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import { About } from "./src/components/About";
import Icon from "react-native-vector-icons/FontAwesome";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddReview } from "./src/components/AddReview";
import { RestaurantInfo } from "./src/components/RestaurantInfo";
import { RestaurantList } from "./src/components/RestaurantList";

const StackScreens = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={RestaurantList}
        name="Restaurant List"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={RestaurantInfo}
        name="Restaurant Info"
        options={{
          headerTitle: "Restaurant Info",
          headerStyle: {
            backgroundColor: "#0066CC",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {
            color: "#FFF",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        component={StackScreens}
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="list" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        component={About}
        name="About"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="info-circle" color={color} size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const Modal = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Modal.Navigator>
        <Modal.Screen
          component={Tabs}
          name="Tabs"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Modal.Screen
          component={AddReview}
          name="AddReview"
          options={{ presentation: "modal", headerShown: false }}
        />
      </Modal.Navigator>
    </NavigationContainer>
  );
};

export default App;
