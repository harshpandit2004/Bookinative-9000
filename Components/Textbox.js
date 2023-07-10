import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function CustomTextbox(props) {
  return (
    <TextInput
      style={styles.textbox}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textbox: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
