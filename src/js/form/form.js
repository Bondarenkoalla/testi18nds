document.addEventListener("DOMContentLoaded", function () {
    const affForm = document.querySelector(".form__affiliates")
    const advertisersForm = document.querySelector(".form__advertisers")
    const radioButtons = document.getElementsByName("purpose");

    if (document.getElementById("advertiseModal").checked) {
        affForm.style.display = "none";
    }
    if (document.getElementById("affiliateModal").checked) {
        advertisersForm.style.display = "none";
    }

    radioButtons.forEach(function (button) {
        button.addEventListener("change", function () {
            if (document.getElementById("advertiseModal").checked) {
                affForm.style.display = "none";
                advertisersForm.style.display = "block";
            }
            else if (document.getElementById("affiliateModal").checked) {
                advertisersForm.style.display = "none";
                affForm.style.display = "block";
            } else {
                affForm.style.display = "block";
                advertisersForm.style.display = "block";
            }
        });
    });
});
