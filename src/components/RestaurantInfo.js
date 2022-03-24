import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Stars } from "./Stars";

export const RestaurantInfo = ({ navigation, route }) => {
  const place = route.params.place;
  const [reviews, setReviews] = useState();

  const addReview = () => {
    navigation.navigate("AddReview", { place });
  };

  useEffect(() => {
    fetch("http://localhost:3004/reviews")
      .then((response) => response.json())
      .then((result) => setReviews(result));
  }, []);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{
            uri: `http://localhost:3004/images/${place.image}`,
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.info}>
          <Text tyle={styles.name}>{place.name}</Text>
          <Text tyle={styles.address}>{place.address}</Text>
          <Stars rating={place.rating} />
          <TouchableOpacity onPress={addReview} style={styles.button}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.reviews}>
        {reviews
          ?.filter((review) => place.id === review.restaurantId)
          .map((review) => (
            <View style={styles.review}>
              <Text style={styles.reviewerName}>{review.name} reviewed:</Text>
              <Text style={styles.reviewText}>{review.review}</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
  },
  infoHeader: {
    flexDirection: "row",
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  address: {
    color: "grey",
    marginBottom: 5,
  },
  image: {
    height: 100,
    margin: 20,
    width: 100,
  },
  button: {
    backgroundColor: "#fff",
    borderColor: "#0066cc",
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonText: {
    color: "#0066cc",
    fontSize: 12,
    textAlign: "center",
  },
  reviews: {
    flexDirection: "column",
    margin: 20,
  },
  reviewerName: {
    fontWeight: "bold",
  },
  reviewText: {
    fontStyle: "italic",
  },
});
