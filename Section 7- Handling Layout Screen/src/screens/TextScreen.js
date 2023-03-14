import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View>
      <Text>Enter the Data to be displayed</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={text}
        onChangeText={(currentText) => setText(currentText)}
      />
      <Text>The Data Entered is - {text}</Text>
      <Text>Enter the Demo Password for Testing</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={pass}
        onChangeText={(currentPass) => setPass(currentPass)}
      />
      {pass.length < 5 ? (
        <Text>Pass is Invalid</Text>
      ) : (
        <Text>The Data Entered is - {pass}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
