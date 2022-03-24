import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

export const About = () => {
  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Text style={styles.header}>About Restaurant Review</Text>

      <Icon name="utensils" color="#0066CC" size={100} style={styles.icon} />

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ligula ullamcorper,
        pellentesque magna quis, lobortis quam.
      </Text>
      <Text style={styles.text}>
        Mauris efficitur elementum cursus. Cras ultrices urna in ex rutrum rutrum nec sit amet
        lacus. Suspendisse ullamcorper lectus eget ornare venenatis. Suspendisse potenti.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
    marginVertical: 20,
  },
  text: {
    color: "#444",
    fontSize: 14,
    marginTop: 20,
  },
});
