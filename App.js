import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./Screens/Home";
import Detail from "./Screens/Detail";

const App = () => {
  return (
    <Router>
      <Scene key="Root">
        <Scene key="Home" component={Home} title="Cat Facts" initial />
        <Scene key="Detail" component={Detail} title="Cat Fact detail" />
      </Scene>
    </Router>
  );
};

export default App;
