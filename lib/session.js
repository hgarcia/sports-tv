"use strict";

function addToSession(fbUser) {
  console.log(fbUser);
}

module.exports = {
  create(auth) {
    return {
      signin(user) {
        auth
          .signInWithEmailAndPassword(user.email, user.password)
          .then(addToSession)
          .catch(function (error) {
            if (error.code === "auth/user-not-found") {
              auth
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(addToSession)
                .catch((error) => {
                  alert(error.message);
                });
            } else {
              alert(error.message);
            }
          });
      },
      signout() {
        auth
          .signOut()
          .catch((error) => {
            alert(error.message);
          });
      },
      signedUser() {
        console.log(auth.currentUser);
      }
    };
  }
};
