import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import BookEntry from "./IndividualItem";

const BookList = ({ data }) => {
  const renderBook = ({ item, index }) => {
    return (
      <BookEntry
        serialNumber={index + 1}
        name={item.name}
        author={item.author}
        genre={item.genre}
        pirateLink={item.pirate_link}
      />
    );
  };

  const TableHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sr.</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Author</Text>
        <Text style={styles.headerText}>Genre</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      ListHeaderComponent={TableHeader}
      renderItem={renderBook}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255, 0.5)",
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "rgba(255,255,255, 0.5)",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  headerText: {
    fontWeight: "bold",
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
});

export default BookList;
