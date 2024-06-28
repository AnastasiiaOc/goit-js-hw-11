import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import iconError from './img/icon-error.png';
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
        iconUrl: iconError,
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
       loader.style.display = 'grid';
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
    } 
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const tagImage = event.target.elements.search.value;
    showGallery(tagImage);
})

























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


