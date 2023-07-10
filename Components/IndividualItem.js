import React from "react";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";

const BookEntry = (props) => {
  const handlePress = () => {
    console.log(props.pirateLink);
    Linking.openURL(props.pirateLink);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.serialNumber}>{props.serialNumber}</Text>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.author}>{props.author}</Text>
      <Text style={styles.genre}>{props.genre}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    backgroundColor: "rgba(255,255,255, 0.5)",
    width: "90%",
    marginHorizontal: "5%",
  },
  serialNumber: {
    flex: 1,
    textAlign: "center",
  },
  name: {
    flex: 3,
    padding: 5,
    textAlign: "center",
  },
  author: {
    padding: 5,
    flex: 2,
    textAlign: "center",
  },
  genre: {
    padding: 5,
    flex: 2,
    textAlign: "center",
  },
});

export default BookEntry;
