import {

  signOut

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  auth,
  db

}

from "./firebase.js";

import {

  onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  doc,
  getDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 이름 */

const userName =
  document.getElementById("userName");

/* 로그인 상태 */

onAuthStateChanged(auth, async (user) => {

  if(user) {

    /* DB 가져오기 */

    const docRef =
      doc(db, "users", user.uid);

    const docSnap =
      await getDoc(docRef);

    if(docSnap.exists()) {

      userName.textContent =

        docSnap.data().nickname;

    }

  }

  else {

    window.location.href =
      "login.html";

  }

  /* 로그아웃 */

const logoutBtn =
  document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

  signOut(auth)

    .then(() => {

      window.location.href =
        "login.html";

    });

});

});