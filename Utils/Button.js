import React, { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "./Colors";

export default function Button(props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.buttonDiv}
        android_ripple={{ color: "#c99eff" }}
        onPress={props.pressHandler}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    margin: 7,
    borderRadius: 20,
    borderRadius: 20,
    backgroundColor: Colors.grey,
  },
  buttonDiv: {
    backgroundColor: Colors.purple,
    fontFamily: "sans-serif",
    paddingVertical: 10,
    paddingHorizontal: "15%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
  },
});
