import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TitleDabba() {
  return (
    <View style={styles.titleDabba}>
      <Text style={styles.maintitle}>Bookinator-9000</Text>
      <Text style={styles.subtitle}>A Book Recommendation System</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleDabba: {
    marginBottom: 20,
    alignItems: "center",
  },
  maintitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
  },
});
