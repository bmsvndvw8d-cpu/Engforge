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

const signupBtn =
  document.getElementById("signupBtn");

const googleBtn =
  document.getElementById("googleBtn");

const loginForm =
  document.getElementById("loginForm");

/* 로그인 함수 */

function login() {

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
}

/* 버튼 로그인 */

loginBtn.addEventListener("click", (e) => {

  e.preventDefault();

  login();

});

/* 엔터 로그인 */

loginForm.addEventListener("submit", (e) => {

  e.preventDefault();

  login();

});

/* 회원가입 이동 */

signupBtn.addEventListener("click", () => {

  window.location.href =
    "signup.html";

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