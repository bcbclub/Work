const FIRST_NAME = "Gémini";
const LAST_NAME = "Armisdices";
const PASSWORD = "MonSite.com1";


document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName =
      document.getElementById("firstName").value.trim();

    const lastName =
      document.getElementById("lastName").value.trim();

    const password =
      document.getElementById("password").value;

    const error =
      document.getElementById("error");


    if (
      firstName === FIRST_NAME &&
      lastName === LAST_NAME &&
      password === PASSWORD
    ) {

      sessionStorage.setItem(
        "reviseAuth",
        "1"
      );

      sessionStorage.setItem(
        "reviseName",
        firstName + " " + lastName
      );

      window.location.href =
        "dashboard.html";

    } else {

      error.textContent =
        "Identifiants incorrects.";

    }

});
