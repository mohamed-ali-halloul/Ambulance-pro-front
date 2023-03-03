import React, { useEffect } from "react";
import './App.less';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Acceuil from "./Acceuil";
import LayoutDashboard from "./layout/dashboardlayout";
import Home from "./Home";
import AddTransport from "./Component/OperateurCreate";
import ListeTransport from "./Component/ListeTransport";
import AddEtablist from "./Component/etbcreate";
import TransportUrg from "./Component/TransportUrg";
import EtbsListe from "./Component/EtbsListe";
function App() {
  return (
    <div className="App">
     
     <Router>
        <ToastContainer />

        <Switch>
          <Route path="/" exact component={Acceuil} />
         <LayoutDashboard>
          <Route path="/home" exact component={Home}/>
          <Route path="/addTransport" exact component={AddTransport}/>
          <Route path="/TransportList"exact component={ListeTransport} />
          <Route path="/AddEtablis" exact component={AddEtablist}/>
          <Route path="/TransportUrg" exact component={TransportUrg}/>
          <Route path="/EtbsListe" exact component={EtbsListe}/>
          </LayoutDashboard>
          <Route
            path="*"
            component={() => {
              return <p>ERREUR 404 </p>;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
