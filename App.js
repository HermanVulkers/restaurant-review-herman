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

const List = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={RestaurantList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Restaurant Info"
        component={RestaurantInfo}
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
        name="Home"
        component={List}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="list" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
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
          name="Tabs"
          component={Tabs}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Modal.Screen
          name="AddReview"
          component={AddReview}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Modal.Navigator>
    </NavigationContainer>
  );
};

export default App;
