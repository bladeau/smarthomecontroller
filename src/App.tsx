import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { informationCircle, optionsOutline, barChart } from 'ionicons/icons'
import Graphs from './pages/Graphs'
import Options from './pages/Options'
import About from './pages/About'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

// import { BluetoothSerial } from '@ionic-native/bluetooth-serial/'

const App: React.FC = () => {
  // BluetoothSerial.isEnabled().then(
  //   () => {
  //     alert('')
  //   },
  //   () => {
  //     alert('(...)')
  //   }
  // )

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/graphs' component={Graphs} exact={true} />
            <Route path='/options' component={Options} exact={true} />
            <Route path='/about' component={About} />
            <Route
              path='/'
              render={() => <Redirect to='/graphs' />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='Graphs' href='/graphs'>
              <IonIcon icon={barChart} />
              <IonLabel>Dash</IonLabel>
            </IonTabButton>
            <IonTabButton tab='options' href='/options'>
              <IonIcon icon={optionsOutline} />
              <IonLabel>Options</IonLabel>
            </IonTabButton>
            <IonTabButton tab='about' href='/about'>
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}
export default App