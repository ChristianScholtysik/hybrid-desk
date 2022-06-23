import { Redirect, Route } from "react-router-dom";
import { key, person, lockOpen } from "ionicons/icons";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import LandingPage from "./components/LandingPage";
// import Login from "./components/Login";
import PostLogin from "./components/PostLogin";

import { Tab1 } from "./pages/Tab1";
import Registration from "./pages/Registration";
import { Tab3 } from "./pages/Tab3";

// import { HeaderExample } from "./components/Header";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <Route path="/signup" element={<Signup />} /> */}

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <LandingPage />
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
          <Route exact path="/post-login">
            <PostLogin />
          </Route>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          {/* <Route exact path="/">
            <Redirect to="/tab1" />
          </Route> */}
          {/* <Route exact path="/logout">
              <Logout />
            </Route> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={lockOpen} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Registration" href="/Registration">
            <IonIcon icon={key} />
            <IonLabel>Sign up</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
