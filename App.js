import React, { useEffect, useState } from "react";

import { FlatList, StyleSheet, TextInput, View } from "react-native";

import { Header } from "./src/components/Header";
import { RestaurantRow } from "./src/components/RestaurantRow";

const App = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/restaurants")
      .then((response) => response.json())
      .then((result) => setRestaurants(result));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <TextInput
        onChangeText={(text) => {
          setSearch(text);
        }}
        placeholder="Live Search"
        style={styles.input}
        value={search}
      />

      <FlatList
        contentContainerStyle={{ paddingTop: 30 }}
        data={restaurants.filter((place) => {
          return !search || place.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        })}
        renderItem={({ item, index }) => <RestaurantRow place={item} index={index} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
  },
});

export default App;
