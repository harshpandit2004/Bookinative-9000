import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Utils/Button";
import BookList from "../Components/Table";

export default function Browse(props) {
  return (
    <View style={styles.browseContainer}>
      <Text style={styles.title}>Browse</Text>
      <Text style={styles.subtitle}>(tap the book you wish to download)</Text>
      <View style={styles.table}>
        <BookList data={props.data} />
      </View>
      <Button style={styles.backButt} pressHandler={props.backhandler}>
        back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: "5%",
  },
  browseContainer: {
    marginBottom: "60%",
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20%",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: "5%",
  },
  backButt: {
    marginTop: "5%",
  },
});
