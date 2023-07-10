import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import Button from "../Utils/Button";

export default function Recommendation(props) {
  console.log(props.book.coverimg);

  const handlePress = () => {
    console.log(props.book.pirate_link);
    Linking.openURL(props.book.pirate_link);
  };

  return (
    <View>
      <Image
        style={styles.Image}
        source={{
          uri: props.book.coverimg,
        }}
      />
      <View style={styles.information}>
        <Text style={styles.bkName}>{props.book.name} by {props.book.author}</Text>
        <Text style={styles.bkInfo}>{props.book.summary}</Text>
      </View>
      <Button pressHandler={handlePress}>Download</Button>
      <Button pressHandler={props.backhandler}>back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendationContainer: {
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
  Image: {
    width: 216,
    height: 384,
  },
  information: {
    alignItems: "center",
    justifyContent: "center",
    width: 216,
    marginTop: "5%",
    marginBottom: "5%",
  },
  bkName: {
    fontSize: 15,
    textAlign: "center",
  },
  bkInfo: {
    marginTop: "5%",
    fontSize: 12,
    textAlign: "center",
  },

});
