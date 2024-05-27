import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorythms } from "../lib/biorythms";
import BiorhythymChart from "./BiorythmChart";
import './BiorythmCard.css';

function fromatDate(isoString) {
    const day=dayjs(isoString); 
    return day.format('D MMMM YYYY');
}

function BiorhythymCard({ birthDate, targetDate }) {
    const biorythms = calculateBiorythms(birthDate, targetDate);
    return (
        <IonCard class="BiorhythymCard ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{fromatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <BiorhythymChart birthDate={birthDate} targetDate={targetDate} />
                <p class="physical">Physical: {biorythms.physical.toFixed(4)}</p>
                <p class="emotional">Emotional: {biorythms.emotional.toFixed(4)}</p>
                <p class="intellectual">Intellectual: {biorythms.intellectual.toFixed(4)}</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorhythymCard;