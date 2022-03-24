import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Icon from "react-native-vector-icons/FontAwesome";

export const AddReview = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const place = route.params.place;

  const close = () => {
    navigation.goBack();
  };

  useEffect(() => {
    AsyncStorage.getItem("reviewer_name").then((name) => {
      if (name !== null && name !== undefined) {
        setName(name);
      }
    });
  }, []);

  const submitReview = () => {
    setSubmitting(true);

    AsyncStorage.setItem("reviewer_name", name);

    fetch("http://localhost:3004/reviews", {
      method: "POST",
      body: JSON.stringify({
        restaurantId: place.id,
        name: name,
        rating: rating,
        review: review,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setSubmitting(false);
        navigation.goBack();
      });
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity onPress={close} style={styles.button}>
          <Icon color="#0066CC" name="close" size={30} />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>

        <TextInput
          onChangeText={(name) => setName(name)}
          placeholder="Name (optional)"
          style={styles.input}
          value={name}
        />

        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <TouchableOpacity key={i} onPress={() => setRating(i)} style={styles.starButton}>
                <Icon color={rating >= i ? "#FFD64C" : "#CCCCCC"} name={"star"} size={40} />
              </TouchableOpacity>
            );
          })}
        </View>

        <TextInput
          multiline={true}
          numberOfLines={5}
          onChangeText={(review) => setReview(review)}
          placeholder="Review"
          style={[styles.input, { height: 100 }]}
          value={review}
        />

        {submitting && <ActivityIndicator size="large" color="#0066CC" />}

        <TouchableOpacity disabled={submitting} onPress={submitReview} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    color: "#444",
    fontSize: 25,
    margin: 20,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  rating: {
    color: "grey",
    fontSize: 20,
    marginVertical: 40,
    textAlign: "center",
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 80,
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});
