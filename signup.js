import {

  auth,
  db

}

from "./firebase.js";

import {

  createUserWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  doc,
  setDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 요소 */

const nickname =
  document.getElementById("nickname");

const email =
  document.getElementById("email");

const password =
  document.getElementById("password");

const passwordConfirm =
  document.getElementById("passwordConfirm");

const signupBtn =
  document.getElementById("signupBtn");

/* 회원가입 */

signupBtn.addEventListener("click", async () => {

  if (
    password.value !==
    passwordConfirm.value
  ) {

    alert("비밀번호가 일치하지 않습니다.");

    return;
  }

  try {

    /* 회원가입 */

    const userCredential =

      await createUserWithEmailAndPassword(

        auth,

        email.value,

        password.value

      );

    const user =
      userCredential.user;

    /* Firestore 저장 */

    await setDoc(

      doc(db, "users", user.uid),

      {

        nickname: nickname.value,

        email: email.value

      }

    );

    alert("회원가입 성공");

    window.location.href =
      "login.html";

  }

  catch(error) {

    alert(error.message);

  }

});