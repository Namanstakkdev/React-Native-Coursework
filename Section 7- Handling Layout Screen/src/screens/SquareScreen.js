import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";
const COLOURINCREMENT = 10;

const SquareScreen = () => {
  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "red":
        return state.red + action.payload > 255 ||
          state.red + action.payload < 0
          ? state
          : { ...state, red: state.red + action.payload };
      case "green":
        return state.green + action.payload > 255 ||
          state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };
      case "blue":
        return state.blue + action.payload > 255 ||
          state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  const setColor = (color, change) => {
    switch (color) {
      case "change_red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "change_green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "change_blue":
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
          dispatch({ type: "change_red", payload: COLOURINCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOURINCREMENT })
        }
        color="red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOURINCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOURINCREMENT })
        }
        color="green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOURINCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOURINCREMENT })
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
