import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTextbox from "../Components/Textbox";
import Button from "../Utils/Button";

export default function AddBooks(props) {

  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [pirateLink, setPirateLink] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const handleSubmit = () => {
    console.log("Submitted");
    console.log(bookName, bookGenre, authorName, coverImage, pirateLink, bookDescription);

    //adding shit to the bill list
    fetch("https://dead-tan-beaver-robe.cyclic.app/addbook", {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        genre:bookGenre,
        name:bookName,
        author:authorName,
        coverimg:coverImage,
        pirate_link:pirateLink,
        summary:bookDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setBookName("");
    setBookGenre("");
    setAuthorName("");
    setCoverImage("");
    setPirateLink("");
    setBookDescription("");
  };

  return (
    <View style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.heading}>Add Books</Text>
      <CustomTextbox onChangeText={setBookName} value={bookName} placeholder="Book Name" />
      <CustomTextbox onChangeText={setBookGenre} value={bookGenre} placeholder="Book Genre" />
      <CustomTextbox onChangeText={setAuthorName} value={authorName} placeholder="Author Name" />
      <CustomTextbox onChangeText={setCoverImage} value={coverImage} placeholder="Cover Image URL" />
      <CustomTextbox onChangeText={setPirateLink} value={pirateLink} placeholder="Pirate Link" />
      <CustomTextbox onChangeText={setBookDescription} value={bookDescription} placeholder="Book Description" />
      <Button pressHandler={handleSubmit}>Submit</Button>
    </View>
    <Button pressHandler={props.backhandler}>Back</Button>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  formContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});