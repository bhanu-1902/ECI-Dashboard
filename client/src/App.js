import React, { useState } from "react";
import "./App.css";
import TCServices from "./pages/TCservices";
import AWServices from "./pages/AWservices";
import DBServices from "./pages/DBservices";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Owners = () => {
  return <h1>Teamcenter ECI Owners</h1>;
};

const Types = () => {
  return <h1>Environment Types</h1>;
};

const Diagram = () => {
  return <h1>Architecture Diagram</h1>;
};

const Data = () => {
  return <h1>Data Available</h1>;
};

const Admin = () => {
  return (
    <div>
      <TCServices />
      <AWServices />
      <DBServices />
    </div>
    //<h1>Hello admin</h1>
  );
};

const Staging = () => {
  return <AWServices />;
};

const Production = () => {
  return <h1>Environment Admin/Production Environment</h1>;
};

function App() {
  const [inactive, setInactive] = useState(false);
  // <AWServiceList />;
  return (
    <div className="App">
      {/* <TCServiceList />
     
      <DBServiceList /> */}
      <Router>
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route path={"/eci-home/environment-owners"}>
              <Owners />
            </Route>
            <Route path={"/eci-home/environment-types"}>
              <Types />
            </Route>
            <Route path={"/eci-home/diagram"}>
              <Diagram />
            </Route>
            <Route path={"/eci-home/data"}>
              <Data />
            </Route>
            <Route path={"/eci-home/environment-admin"}>
              <Admin />
            </Route>
            <Route path={"/eci-home/environment-admin/staging"}>
              <Staging />
            </Route>
            <Route path={"/eci-home/environment-admin/production"}>
              <Production />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
