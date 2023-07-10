import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Utils/Button";

export default function Buttons(props) {
  return (
    <>
      <Button pressHandler={props.recommendationHandler}>
        Recommend me a Book
      </Button>
      <Button pressHandler={props.AddHandler}>Add Book To the Library</Button>
      <Button pressHandler={props.BrowseHandler}>Browse Library</Button>
    </>
  );
}

const styles = StyleSheet.create({
  buttonDabba: {
    alignItems: "center",
    justifyContent: "center",
  },
});
