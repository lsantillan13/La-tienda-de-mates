import firebase from 'firebase/app';
import "firebase/firestore";
const firebaseConfig = {
    //OBJETO DE FIREBASE
    apiKey: "AIzaSyBWf8KpdjQqiYTjRExao2TAAlM2gyeKFR4",
    authDomain: "react-animales-lautaro.firebaseapp.com",
    projectId: "react-animales-lautaro",
    storageBucket: "react-animales-lautaro.appspot.com",
    messagingSenderId: "911578375593",
    appId: "1:911578375593:web:ff70b25cfd8696832e90b8",
};
const app = firebase.initializeApp(firebaseConfig);
export function getFireBase(){
    return app;
}
export const database = firebase.firestore();