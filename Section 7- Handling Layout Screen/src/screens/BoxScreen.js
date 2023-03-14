import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Box Screen </Text>
      <Text style={styles.textOneStyle}> First Content </Text>
      <Text style={styles.textTwoStyle}> Second Content </Text>
      <Text style={styles.textThirdStyle}> Third Content </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 1,
    height: 200,
    flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "flex-start",
  },
  textStyle: {
    borderColor: "red",
    borderWidth: 3,
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
  textOneStyle: {
    borderColor: "red",
    borderWidth: 3,
    flex: 1,
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
  textTwoStyle: {
    borderColor: "red",
    borderWidth: 3,
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
  textThirdStyle: {
    borderColor: "red",
    borderWidth: 3,
    // marginVertical: 20,
    // marginHorizontal: 20,
  },
});

export default BoxScreen;
