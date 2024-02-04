export function handleForm(formSelector) {
    const form = document.querySelector(formSelector);
    const telegramInput = form.querySelector(".telegram");
    const skypeInput = form.querySelector(".skype");
    const infoText = form.querySelector(".form__info_one");

    document.addEventListener('focusout', function (e) {
        if (e.target.tagName === "INPUT") {
            !e.target.validity.valid ? e.target.classList.add('invalid') : e.target.classList.remove('invalid');

            if (telegramInput.value.trim() !== "" || skypeInput.value.trim() !== "") {
                infoText.style.opacity = '0';
            }
        }
    });

    form.addEventListener("submit", function (event) {
        if (telegramInput.value.trim() === "" && skypeInput.value.trim() === "") {
            event.preventDefault();
            infoText.style.opacity = '1';
        } else {
            event.preventDefault();

            const formData = new FormData(form);

            const jsonData = {};

            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            // const apiUrl = 'https://trk.darkside-partners.pro/api/v2/network/affiliates?api-key=88dc40614af8e7ecd29f3b9a8bf29e04ab4703f0';
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts';//fake api for test
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    form.reset();
                    const successMessage = document.querySelector('.successMessage');
                    successMessage.classList.remove('successMessage_hidden');    
                
                    setTimeout(() => {
                        successMessage.classList.add('successMessage_hidden');
                    }, 1000);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    });
}

handleForm(".formGeneral");
