import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import React from "react";
import AccountSetting from "./pages/AccountSetting";
import History from "./components/History/history";
import Outlet from "./components/Outlet/Outlet";
import Order from "./components/Order/Order";
import DetailOrder from "./components/DetailOrder/DetailOrder";
import Payment from "./components/Payment/Payment";
import Recommended from "./pages/Recommended";
import Seafood from "./pages/Seafood";
import Pizza from "./pages/Pizza";
import Vegetables from "./pages/Vegetables";
import Beverage from "./pages/Beverage";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/" exact component={Home}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/accountsetting" exact component={AccountSetting}></Route>
      <Route path="/history" exact component={History}></Route>
      <Route path="/outlet" exact component={Outlet}></Route>
      <Route path="/order" exact component={Order}></Route>
      <Route path="/detail" exact component={DetailOrder}></Route>
      <Route path="/payment" exact component={Payment}></Route>
      <Route path="/recommended" exact component={Recommended}></Route>
      <Route path="/seafood" exact component={Seafood}></Route>
      <Route path="/pizza" exact component={Pizza}></Route>
      <Route path="/vegetables" exact component={Vegetables}></Route>
      <Route path="/beverage" exact component={Beverage}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
