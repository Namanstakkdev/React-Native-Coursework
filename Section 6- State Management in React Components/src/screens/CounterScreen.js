import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button title="Increase Counter: +" onPress={() => setCount(count + 1)} />
      <Button title="Decrease Counter: +" onPress={() => setCount(count - 1)} />
      <Text>Counter Count : + {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
