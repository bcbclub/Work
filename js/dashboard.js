if (
  sessionStorage.getItem("reviseAuth") !== "1"
) {

  window.location.href =
    "login.html";

}


const name =
  sessionStorage.getItem("reviseName")
  || "Gémini Armisdices";


document.getElementById("welcome")
  .textContent =
  "Bienvenue, " + name + ".";


document
  .getElementById("logout")
  .addEventListener("click", function() {

    sessionStorage.clear();

    window.location.href =
      "index.html";

  });
