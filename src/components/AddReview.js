import React, { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Icon from "react-native-vector-icons/FontAwesome";

export const AddReview = ({ navigation }) => {
  const [name, setName] = useState();
  const [rating, setRating] = useState();
  const [review, setReview] = useState();

  const close = () => {
    navigation.goBack();
  };

  const submitReview = () => {
    this.setState({ submitting: true });
    fetch("http://localhost:3000/review", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        rating: this.state.rating,
        comment: this.state.comment,
      }),
    }).then((response) => response.json());
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity onPress={close} style={styles.button}>
          <Icon name="close" size={30} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>

        <TextInput
          style={styles.input}
          placeholder="Name (optional)"
          value={name}
          onChangeText={(name) => setName(name)}
        />

        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <TouchableOpacity onPress={() => setRating(i)} style={styles.starButton} key={i}>
                <Icon name={"star"} color={rating >= i ? "#FFD64C" : "#CCCCCC"} size={40} />
              </TouchableOpacity>
            );
          })}
        </View>

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Review"
          value={review}
          onChangeText={(review) => setReview(review)}
          multiline={true}
          numberOfLines={5}
        />

        <TouchableOpacity onPress={submitReview} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
