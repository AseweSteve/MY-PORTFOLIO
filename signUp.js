
const main = document.getElementById("main")
const createacct = document.getElementById("create-acct")

const signupButton = document.getElementById("sign-up")
const returnBtn = document.getElementById("return-btn")


signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display ="block"


});

returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createacct.style.display ="none";

});