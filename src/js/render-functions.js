import getImage from "./pixabay-api";

export default createMarcupGallery;

function createMarcupGallery(images) {
  return images.map((element) => 
        `<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${element.largeImageURL}">
                <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${element.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${element.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${element.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${element.downloads}</p>
              </li>
            </ul>
        </li>`).join('');
};








// +++++++++++++++++++DOESN4T WORK+++++++++++++++++++++++++++++
// export default createMarkup;

// function createMarkup(array) {
//     return array.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//        return `<li>
//         <a class="large-image" href="${largeImageURL}">
//     <img src="${webformatURL}" alt="${tags}"data-source="${largeImageURL}">
//         <div class="image-info">
//                             <ul class="image-info-list">
//                                 <li class="image-item">
//                                     <h2 class="image-text">Likes</h2>
//                                     <p class="image-info">${likes}</p>
//                                 </li>
//                                 <li class="image-item">
//                                     <h2 class="image-text">Views</h2>
//                                     <p class="image-info">${views}</p>
//                                 </li>
//                                 <li class="image-item">
//                                     <h2 class="image-text">Comments</h2>
//                                     <p class="image-info">${comments}</p>
//                                 </li>
//                                 <li class="image-item">
//                                     <h2 class="image-text">Downloads</h2>
//                                     <p class="image-info">${downloads}</p>
//                                 </li>
//                             </ul>
//                         </div>
//          </li>`;
//     }).join("");
// }






