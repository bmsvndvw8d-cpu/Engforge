import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getAuth

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  getFirestore

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* Firebase 설정 */

const firebaseConfig = {

apiKey: "AIzaSyChN3aBoj6CF4RRXLxUJ-TFMflgT-mxZJk",
  authDomain: "project-rs-f29fa.firebaseapp.com",
  projectId: "project-rs-f29fa",
  storageBucket: "project-rs-f29fa.firebasestorage.app",
  messagingSenderId: "807068080858",
  appId: "1:807068080858:web:1abd3b84c061ea9f2ae3e3"

};

/* 앱 */

const app =
  initializeApp(firebaseConfig);

/* 인증 */

export const auth =
  getAuth(app);

/* DB */

export const db =
  getFirestore(app);