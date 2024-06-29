import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import searchImages from './js/pixabay-api';
import createMarcupGallery from './js/render-functions';


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });

function showMessageError(textMes) {
    iziToast.error({
        // iconUrl: iconError,
        message: textMes,
        maxWidth: '432px',
        position: 'topRight',
        messageSize: 16,
        backgroundColor: '#ef4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
    }); 
}

function showGallery(tagImage) {
   if (tagImage) {
       form.reset();
       gallery.innerHTML = '';
       loader.style.display = 'block';
       searchImages(tagImage)
            .then(data => {
                const arrayImages = data.hits;
                if (arrayImages.length) {
                    gallery.innerHTML = createMarcupGallery(arrayImages);
                    lightbox.refresh();
                } else {
                    showMessageError(
                        'Sorry, there are no images matching your search query. Please try again!');
                }
            })
            .catch((error) => showMessageError(error))
           .finally(() => loader.style.display = 'none');
       //  .catch((error) => console.error(error));
    } 
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const tagImage = event.target.elements.search.value;
    showGallery(tagImage);
})



// Завдання #1 вирішено неправильно

// Обробка помилок: Студент додав блок catch у функцію showGallery, що є добре, але загалом є хорошою практикою потенційно логувати помилки в консоль, особливо для розробки, використовуючи щось на кшталт console.error(error).
// Очищення галереї: Перед додаванням нових результатів, внутрішнє HTML галереї установлюється в порожній рядок, що є правильно. Однак, цей рядок, ймовірно, повинен бути перед додаванням нових зображень, а не умовно заснований на наявності tagImage.
// Найменування аргументів функцій: Ім'я аргумента tagImage може вводити в оману, якщо воно містить фактичний пошуковий рядок; назва на кшталт searchQuery була б більш описовою та точною.
// Змішана відповідальність в обробці помилок: Функція showMessageError реалізована для відображення помилок за допомогою iziToast, що є нормально, але її назва натякає, що вона специфічна для ситуацій з помилками, однак, вона також може використовуватися для інформаційних повідомлень або повідомлень про успіх - варто розглянути більш універсальну назву на кшталт showToastMessage.
//     loader.style.display встановлюється в 'grid' замість 'block' або 'none', що може бути ризиковано без контексту оточуючих CSS.Переконайтеся, що це навмисно і лоадер дійсно має відображатись як сітка.

// Критичні помилки:
// Вітсутня загальна обробка помилок на єтапі запиту у функції getImage
// Враховуючи вказані критичні питання, завдання не може бути прийняте у його поточному стані. Після того, як критичні помилки будуть вирішені і закоментований код буде вирішений, будь ласка, переісправте для ще однієї оцінки
























// =============DOESNT WORK===============================================
// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import  createMarkup from "./js/render-functions";
// import getImage from "./js/pixabay-api";

// const search = document.querySelector(".js-search");
// const gallery = document.querySelector(".gallery");
// const loader = document.querySelector('.loader');

// // const form = document.querySelector('.form'); = const search

// search.addEventListener("submit", onSearch);

// function onSearch(event) {
//     event.preventDefault();  
//   const tagImage = event.currentTarget.elements;
//     // const searchImage = evt.target.elements.search.value;***
//   showGallery(tagImage)
//     //  .then((data) => (gallery.innerHTML = createMarkup(data.gallery)))***
//     // .catch((err) => console.log(err));***
// }

// const lightbox = new SimpleLightbox('.gallery a',
//     {
//         captionsData: 'alt',
//         captionDelay: 250,
//     });

// function errorMsg() {
//     iziToast.error({
//                            message: 'Sorry, there are no images matching your search query. Please try again!',
//                            messageColor: '#FFFFFF',
//                            backgroundColor: '#B51B1B',
//                            position: 'center',
//                        });
// }

// function showGallery(tagImage) {
//     if (tagImage) {
//         search.reset();
//         gallery.innerHTML = "";
//         loader.style.display = "block";
//         getImage(tagImage)
//             .then(data => {
//                 if (data.hits.length === 0) {
//                     //   if (data.hits.length) {
//                     errorMsg()
//                     loader.style.display = "none";
//                     search.reset();
//                 }
//                 else
                
//                 {
//                     const result = data.hits;
//                     gallery.innerHTML = createMarkup(result);
//                     loader.style.display = "none";
//                     // lightbox = initializeLightbox();***
//                     // lightbox.refresh();***
//                     search.reset();
//                 }
//             })
//    .catch((error) => errorMsg(error))
//             .finally(() => loader.style.display = 'none');
//     } 
// }


// search.addEventListener('submit', event => {
//     event.preventDefault();
//     const tagImage = event.target.elements.search.value;
//     showGallery(tagImage);
// })


