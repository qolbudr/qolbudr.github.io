import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhQYRTNLmW3TSUnEtQe1abzBmH10UT8EE",
  authDomain: "github-pages-test.firebaseapp.com",
  projectId: "github-pages-test",
  storageBucket: "github-pages-test.appspot.com",
  messagingSenderId: "631373002471",
  appId: "1:631373002471:web:c6b4e7936561631b559442"
};


export const app = initializeApp(firebaseConfig);