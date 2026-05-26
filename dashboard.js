import { auth }
from "./firebase.js";

import {

  onAuthStateChanged,
  signOut

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const userName =
  document.getElementById("userName");

const logoutBtn =
  document.getElementById("logoutBtn");

/* 로그인 상태 */

onAuthStateChanged(auth, (user) => {

  if (user) {

    userName.textContent =
      user.displayName || "사용자";

  } else {

    window.location.href =
      "login.html";
  }

});

/* 로그아웃 */

logoutBtn.addEventListener(
  "click",
  async () => {

    await signOut(auth);

    window.location.href =
      "login.html";
  }
);