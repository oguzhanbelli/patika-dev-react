import React from "react";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

import {useTheme} from "../context/ThemeContext";

function Container() {
    const {theme} = useTheme()
    console.log(theme);
  return (
    <div className={theme}>
      <Button />
      <Header></Header>
      <hr />
      <Profile></Profile>
    </div>
  );
}

export default Container;
