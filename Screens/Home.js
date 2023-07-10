import React from "react";
import TitleDabba from "../Components/TitleDabba";
import Buttons from "../Components/Buttons";

export default function Home(props) {
  return (
    <>
      <TitleDabba />
      <Buttons
        recommendationHandler={props.recommendationHandler}
        AddHandler={props.AddHandler}
        BrowseHandler={props.BrowseHandler}
      />
    </>
  );
}
