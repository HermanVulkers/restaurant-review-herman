import React, { useState } from "react";

import { Image, Text, TouchableHighlight, View } from "react-native";

import { Stars } from "./Stars";

export const RestaurantRow = ({ place, index, navigation }) => {
  const [showInfo, setShowInfo] = useState();

  const infoPressed = () => {
    navigation.navigate("Restaurant Info", { place });
  };

  return (
    <View key={place.name} style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={place.rating} />
        </View>

        <View style={styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={styles.addressText}>{place.address}</Text>
        </View>

        <View style={styles.edges}>
          <TouchableHighlight onPress={infoPressed} style={styles.button} underlayColor="#5398DC">
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>

      {showInfo && (
        <View style={styles.info}>
          <Text>Restaurant Info</Text>
          <Image
            source={{
              uri: `http://localhost:3004/images/${place.image}`,
              width: 100,
              height: 100,
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = {
  row: {
    flexDirection: "row",
    padding: 5,
  },
  stars: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    minWidth: 50,
    padding: 5,
  },
  edges: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    minWidth: 50,
    padding: 5,
  },
  nameAddress: {
    flex: 8,
    flexDirection: "column",
  },
  addressText: {
    color: "grey",
  },
  button: {
    backgroundColor: "#FFFF",
    borderColor: "#0066CC",
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
  },
  info: {
    backgroundColor: "#FFF",
    borderColor: "#DDD",
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
  },
};
