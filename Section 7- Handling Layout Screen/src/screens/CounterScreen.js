import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase Counter: +"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Decrease Counter: +"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <Text>Counter Count : + {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
