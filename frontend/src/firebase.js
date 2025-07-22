import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRmYyj4l1K2PN0BxmPMwLIy1M5Y8Nzgjg",
    authDomain: "pakvista-6548c.firebaseapp.com",
    projectId: "pakvista-6548c",
    storageBucket: "pakvista-6548c.firebasestorage.app",
    messagingSenderId: "915273181968",
    appId: "1:915273181968:web:a667385829a7469f1e1395"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);