import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonToolbar,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonFabList,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { book, person, help } from "ionicons/icons";
import { Tab1 } from "./pages/Tab1";
import { Tab2 } from "./pages/Tab2";
import { Tab3 } from "./pages/Tab3";
import { HeaderExample } from "./components/Header";

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
    <IonHeader>
      <IonToolbar>
        <HeaderExample />
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonFab
        color="secondary"
        vertical="top"
        horizontal="end"
        slot="fixed"
        edge
      >
        <IonFabButton color="secondary">
          <IonAvatar class="Avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
              alt="bild"
            />
          </IonAvatar>
        </IonFabButton>
        <IonFabList side="bottom">
          <IonFabButton className="IonFabButton">
            {" "}
            test
            <IonIcon icon={person} className="button-icon" />
          </IonFabButton>
          <div className="profile_button">Profile</div>

          <IonFabButton>
            <IonIcon icon={book} className="button-icon" />
          </IonFabButton>
          <div className="history_button">History</div>
        </IonFabList>
      </IonFab>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={help} />
              <IonLabel>Help</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={book} />
              <IonLabel>Booking History</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonContent>
  </IonApp>
);

export default App;
