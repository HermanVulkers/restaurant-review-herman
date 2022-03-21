import React from "react";

import { Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          textAlign: "center",
          color: "#0066CC",
          fontweight: "300",
        }}
      >
        Restaurant Review
      </Text>
      <Text style={{ color: "grey" }}>React Cafe</Text>
      <Text>123 Anywhere Street</Text>
      <Text style={{ color: "grey" }}>Fancy Restaurant</Text>
      <Text>799 Main Street</Text>
    </View>
  );
};

export default App;
