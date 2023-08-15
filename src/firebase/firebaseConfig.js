// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//! yetkilendirme için gerekli importlars
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8vuzSZhpRznm1iCrsrvlvCHQXvJSoKJU',
  authDomain: 'hi-chat-95f5d.firebaseapp.com',
  projectId: 'hi-chat-95f5d',
  storageBucket: 'hi-chat-95f5d.appspot.com',
  messagingSenderId: '945720649254',
  appId: '1:945720649254:web:4c1b4a2f849ab858b368e7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! yetkilendirme için gerekli kurulum
export const auth = getAuth(app);

//! google sağlayıcısı kurulum
export const provider = new GoogleAuthProvider();

//! veritabanı kurulum
export const db = getFirestore(app);
