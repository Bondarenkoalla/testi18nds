const form = document.querySelector(".formGeneral");
const radioButtons = form.querySelectorAll(".form__radio")
const locationInput = form.querySelector(".location");
const emailInput = form.querySelector(".email");

radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", function () {

        if (radioButton.value === "affiliateModal") {
            locationInput.required = false;
            emailInput.required = false;
        } else if (radioButton.value === "advertiseModal") {
            locationInput.required = true;
            emailInput.required = true;
        }

    });
});
