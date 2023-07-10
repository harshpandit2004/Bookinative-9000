import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleDabba from "../Components/TitleDabba";
import Buttons from "../Components/Buttons";

export default function Home(props) {
  return (
    <View style={styles.HomeDabba}>
      <TitleDabba />
      <Buttons
        recommendationHandler={props.recommendationHandler}
        AddHandler={props.AddHandler}
        BrowseHandler={props.BrowseHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeDabba: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
    padding: "10%",
    margin: "10%",
    borderRadius: 20,
  },
});
