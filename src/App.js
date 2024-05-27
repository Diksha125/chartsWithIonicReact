import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import BiorhythymCard from './components/BiorythmCard';
import { useStoredState } from './lib/hooks';

function getToday(){
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);
}

function App() {
  // const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useStoredState('birthDate', '');
  const [targetDate, setTargetDate] = useState(getToday);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythyms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {Boolean(birthDate) && (
          <BiorhythymCard birthDate = {birthDate} targetDate = {targetDate}/>
        )}
        <IonList>
          <IonItem>
            <IonLabel position='stacked'>Date of Birth:</IonLabel>
            <IonInput value={birthDate} type='date' onIonChange={(event) => setBirthDate(event.detail.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel position='stacked'>Target Date:</IonLabel>
            <IonInput value={targetDate} type='date' onIonChange={(event) => setTargetDate(event.detail.value)}/>
          </IonItem>
        </IonList>
      
      </IonContent>
    </IonApp>
  );
}

export default App;
