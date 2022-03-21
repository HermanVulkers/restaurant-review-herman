import React, { useState } from "react";

import { Text, TouchableHighlight, View } from "react-native";

export const RestaurantRow = ({ place, index }) => {
  const [showInfo, setShowInfo] = useState();

  const infoPressed = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View key={place.name} style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}>
      <View style={styles.row}>
        <View style={styles.edges}>
          <Text>{index + 1}</Text>
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
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#FFFF",
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 4,
  },
};
