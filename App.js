import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Screens/Home";
import Recommendation from "./Screens/Recommendation";
import AddBooks from "./Screens/AddBooks";
import Browse from "./Screens/Browse";

export default function App() {
  const [temp, setTemp] = useState(true);
  const [data, setData] = useState([]);
  const [renderer, setRenderer] = useState();

  const backhandler = () => {
    setRenderer(
      <Home
        recommendationHandler={recommendationHandler}
        AddHandler={AddHandler}
        BrowseHandler={BrowseHandler}
      />
    );
  };

  useEffect(() => {
    fetch("https://bookinator-9000.cyclic.app/getbooklist").then((response) => {
      response.json().then((data) => {
        setData(data);
        console.log(data[1]);
      });
    });

    setRenderer(
      <Home
        recommendationHandler={recommendationHandler}
        AddHandler={AddHandler}
        BrowseHandler={BrowseHandler}
      />
    );
  }, [temp]);

  const recommendationHandler = () => {
    setTemp(!temp);
    setTimeout(() => {
      setRenderer(<Recommendation backhandler={backhandler} data={data} />);
    }, 1000);
  };
  const AddHandler = () => {
    setTemp(!temp);
    setTimeout(() => {
      setRenderer(<AddBooks backhandler={backhandler} data={data} />);
    }, 1000);
  };
  const BrowseHandler = () => {
    setTemp(!temp);
    setTimeout(() => {
      setRenderer(<Browse backhandler={backhandler} data={data} />);
    }, 1000);
  };

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
