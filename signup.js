import { auth }
from "./firebase.js";

import {

  createUserWithEmailAndPassword,
  updateProfile

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* form */

const signupForm =
  document.getElementById("signupForm");

signupForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const nickname =
      document.getElementById("nickname").value;

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    try {

      /* 회원가입 */

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      /* 닉네임 저장 */

      await updateProfile(
        userCredential.user,
        {

          displayName: nickname
        }
      );

      alert("회원가입 성공!");

      window.location.href =
        "dashboard.html";

    } catch (error) {

      console.error(error);

      alert(error.message);
    }
  }
);