import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Utils/Button";

export default function Browse(props) {
  console.log(props.data[0]);
  const dataval = props.data[15].author;
  return (
    <View>
      <Text>{dataval}</Text>
      <Button pressHandler={props.backhandler}>back</Button>
    </View>
  );
}
