import { auth }
from "./firebase.js";

import {

  signInWithEmailAndPassword,

  GoogleAuthProvider,

  signInWithPopup

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* 요소 */

const email =
  document.getElementById("email");

const password =
  document.getElementById("password");

const loginBtn =
  document.getElementById("loginBtn");

const googleBtn =
  document.getElementById("googleBtn");


/* 로그인 */

loginBtn.addEventListener("click", () => {

  signInWithEmailAndPassword(

    auth,

    email.value,

    password.value

  )

  .then(() => {

    window.location.href =
      "dashboard.html";

  })

  .catch((error) => {

    alert(error.message);

  });

});

/* 구글 로그인 */

googleBtn.addEventListener("click", () => {

  const provider =
    new GoogleAuthProvider();

  signInWithPopup(auth, provider)

    .then(() => {

      window.location.href =
        "dashboard.html";

    })

    .catch((error) => {

      alert(error.message);

    });

});