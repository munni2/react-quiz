import { initializeApp } from "firebase/app";

// firebase configaration

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_authDomain,
    projectId: process.env.REACT_APP_API_projectId,
    storageBucket: process.env.REACT_APP_API_storageBucket,
    messagingSenderId: process.env.REACT_APP_API_messagingsenderid,
    appId: process.env.REACT_APP_API_appId,
});

export default app;