import React, { useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Tab1.css'
import { BLE } from '@ionic-native/ble'
import { BluetoothSerial } from '@ionic-native/bluetooth-serial'

const Graphs: React.FC = () => {
  BluetoothSerial.isEnabled().then(success => {
    BluetoothSerial.list().then(response => {
      if (response.length > 0) {
        alert(response);

      } else {
        alert('BLUETOOTH.NOT_DEVICES_FOUND');
      }
    }).catch((error) => {
      console.log("[bluetooth.service-41] Error: " + JSON.stringify(error));
      alert('BLUETOOTH.NOT_AVAILABLE_IN_THIS_DEVICE');
    });
  }, fail => {
    console.log("[bluetooth.service-45] Error: " + JSON.stringify(fail));
    alert('BLUETOOTH.NOT_AVAILABLE');
  });
});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => scan()}>Scan</IonButton>
        <p>{response}</p>
        <ExploreContainer name='Tab 1 page' />
      </IonContent>
    </IonPage>
  )
}

export default Graphs
