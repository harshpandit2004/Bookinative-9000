import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

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
    setRenderer(<Recommendation backhandler={backhandler} data={data} />);
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

  return <View style={styles.container}>{renderer}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
