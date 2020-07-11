import React from "react";
import { Switch, Route } from "react-router-dom";

import Agents from "../pages/Agents/";
import Maps from "../pages/Maps/";
import Arsenal from "../pages/Arsenal/";

import { MainStyled } from "./MainStyled";

function Main() {
  return (
    <MainStyled>
      <Switch>
        <Route path="/agents" component={Agents} />
        <Route path="/maps" component={Maps} />
        <Route path="/arsenal" component={Arsenal} />
      </Switch>
    </MainStyled>
  );
}

export default Main;
