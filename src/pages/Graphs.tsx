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

const Graphs: React.FC = () => {
  let devices: string[] = []
  const [response, setResponse] = useState('')
  BLE.enable().then(
    function () {
      console.log('Bluetooth is enabled')
    },
    function () {
      console.log('Please enable Bluetooth')
    }
  )
  BLE.isEnabled().then(
    () => alert('Bluetooth is enabled'),
    () => alert('Bluetooth is not enabled')
  )

  let scan = () => {
    BLE.scan([], 60).subscribe((device) => {
      alert('device')
      if (device && device.name) {
        devices = [...devices, device.name]
        setResponse(devices.reduce((a, b) => a + ', ' + b))
      }
    })
  }

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
