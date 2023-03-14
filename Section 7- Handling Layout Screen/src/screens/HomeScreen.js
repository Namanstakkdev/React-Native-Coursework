import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go To List Items"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go To Image Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go To Counter Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go To Colour Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go To Square Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go To Text Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Box")}
        title="Go To Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
