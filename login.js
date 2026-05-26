import { auth }
from "./firebase.js";

import {

  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* 요소 */

const loginForm =
  document.getElementById("loginForm");

const googleBtn =
  document.getElementById("googleBtn");

/* 이메일 로그인 */

loginForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      /* 로그인 성공 */

      window.location.href =
        "dashboard.html";

    } catch (error) {

      console.error(error);

      alert(error.message);
    }
  }
);

/* 구글 로그인 */

googleBtn.addEventListener(
  "click",
  async () => {

    try {

      const provider =
        new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      window.location.href =
        "dashboard.html";

    } catch (error) {

      console.error(error);

      alert(error.message);
    }
  }
);