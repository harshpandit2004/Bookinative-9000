import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Home from "./Screens/Home";
import Recommendation from "./Screens/Recommendation";
import AddBooks from "./Screens/AddBooks";
import Browse from "./Screens/Browse";

export default function App() {
  const [temp, setTemp] = useState(true);
  const [data, setData] = useState("DATA");
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    fetch("https://bookinator-9000.cyclic.app/getbooklist").then((response) => {
      response.json().then((data) => {
        console.log(data[0]);
        setData(data);
      });
    });
  }, [temp]);

  const backhandler = () => {
    setRenderer(
      <Home
        recommendationHandler={recommendationHandler}
        AddHandler={AddHandler}
        BrowseHandler={BrowseHandler}
      />
    );
  };

  const recommendationHandler = () => {
    const arraylength = data.length;
    const rando = Math.floor(Math.random() * arraylength);
    const book = data[rando];
    setRenderer(<Recommendation backhandler={backhandler} book={book} />);
  };

  const AddHandler = () => {
    setRenderer(<AddBooks backhandler={backhandler} data={data} />);
  };

  const BrowseHandler = () => {
    setRenderer(<Browse backhandler={backhandler} data={data} />);
  };

  useEffect(() => {
    setRenderer(
      <Home
        recommendationHandler={recommendationHandler}
        AddHandler={AddHandler}
        BrowseHandler={BrowseHandler}
      />
    );
  }, [data]);

  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.image}
    >
      <View style={styles.container}>{renderer}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0, 0.01)",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
});
