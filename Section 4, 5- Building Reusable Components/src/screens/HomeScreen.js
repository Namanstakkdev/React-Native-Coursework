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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
