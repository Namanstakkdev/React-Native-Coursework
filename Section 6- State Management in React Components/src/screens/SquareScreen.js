import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";
const COLOURINCREMENT = 10;

const SquareScreen = () => {
  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return { ...state, red: state.red + action.amount };
      case "green":
        return { ...state, green: state.green + action.amount };
      case "blue":
        return { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOURINCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "Red", amount: COLOURINCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "Green", amount: COLOURINCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "Green", amount: COLOURINCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOURINCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOURINCREMENT })
        }
        color="blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
