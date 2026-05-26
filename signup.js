import { auth, db }
from "./firebase.js";

import {

  createUserWithEmailAndPassword,
  updateProfile

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  doc,
  setDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user =
        userCredential.user;

      /* 닉네임 저장 */

      await updateProfile(user, {

        displayName: nickname

      });

      /* firestore 저장 */

      await setDoc(
        doc(db, "users", user.uid),
        {

          nickname: nickname,
          email: email,
          createdAt: new Date()

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