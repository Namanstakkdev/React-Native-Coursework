import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Naman";
  const greetings = `Hi There! ${name}`;

  return (
    <View>
      <Text style={styles.textStyle}>{greetings}</Text>
      <Text style={styles.subHeaderStyle}>
        Getting Started with React Native.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 25,
  },
});

export default ComponentsScreen;
