const initialCards = [{
        name: "Valle de Yosemite",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const cardTemplate = document.querySelector("#container").textContent;
const cardsContainer = document.querySelector(".elements__container");

const addElement = function () {
    initialCards.forEach(function (item) {
        const cardElement = cardTemplate.querySelector(".elements__container").cloneNode(true);

        cardElement.querySelector(".elements__name").textContent = item.name;
        cardElement.querySelector(".elements__img").src = item.link;
        cardElement.querySelector(".elements__img").alt = item.name;
    });
};


const formElement = document.querySelector('.popup__form');
const formButton = document.querySelector('.popup__button-form');
const profileButton = document.querySelector('.profile__btn');


function handleProfileFormSubmit(evt) {

        evt.preventDefault();

    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description');

    profileName.textContent = evt.target.form.elements.popup__name.value;
    profileDescription.textContent = evt.target.form.elements.popup__about.value;


    setTimeout(closeForm, 175)

}


function openForm() {

    document.querySelector(".popup").style.display = "block";

}

function closeForm() {

    document.querySelector(".popup").style.display = "none";

}


function openFormImages() {

    document.querySelector(".form").style.display = "block";

}

function closeFormImages() {

    document.querySelector(".form").style.display = "none";
    
}

document.querySelector('.profile__button').addEventListener("click", openForm)
document.querySelector('.popup__button-close').addEventListener("click", closeForm)
document.querySelector(".popup__button-form").addEventListener("click", handleProfileFormSubmit)
document.querySelector('.profile__btn').addEventListener("click", openFormImages)
document.querySelector('.form__button').addEventListener("click", closeFormImages)