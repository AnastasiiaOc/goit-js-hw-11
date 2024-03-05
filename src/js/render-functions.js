


// При натисканні на кнопку відправки форми, додайте перевірку вмісту текстового поля на наявність порожнього рядка, щоб користувач не міг відправити запит, якщо поле пошуку порожнє.

// створи функції для відображення елементів інтерфейсу.
// Для організації коду використовуй модульність та синтаксис export/import:

// Якщо бекенд повертає порожній масив, значить, нічого підходящого не було знайдено. У такому разі показуй повідомлення з текстом "Sorry, there are no images matching your search query. Please try again!". Для повідомлень використовуй бібліотеку iziToast.
//  if (today >= usersDate) {
//       button.disabled = true;
//     iziToast.error({
//         message: 'Please choose a date in the future',
//         messageColor: '#FFFFFF',
//         backgroundColor: '#B51B1B',
//         position: 'topRight',
//         iconUrl: error
//     })
//  }
//  else {    
//     button.disabled = false;
//  }
// }

// Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт, крім того, що описаний у документації.

//   <form class="form">
//     <input type="text" name="seach" placeholder="Search images..."/>
//     <button class="button" type = "submit">Search</button>
//   </form>
// <ul class="gallery">

// </ul>

const search = document.querySelector(".js-search");
const gallery = document.querySelector(".gallery");
search.addEventListener("submit", onSearch);


function onSearch(evt) {
    evt.preventDefault();
}




//   <form class="form">
//     <input type="text" name="seach" placeholder="Search images..."/>
//     <button class="button" type = "submit">Search</button>
//   </form>
// <ul class="gallery">

// </ul>


/////////////////////////

// RYSITCH
// HTML
// AllCollection < form action = "submit" class="js-search" >
//         <input type="text" name="query">
//         <select name="days">
//             <option value="3">3</option>
//             <option value="5">5</option>
//             <option value="7">7</option>
//             <option value="10">10</option>
//             <option value="14">14</option>
//         </select>
//         <button>Шукати</button>
//     </form>
//     <ul class="js-list">

//     </ul>
//     <script src="./script.js"></script>
// </body>


// const search = document.querySelector(".js-search");
// const list = document.querySelector(".js-list");
// search.addEventListener("submit", onSearch);

// function onSearch(evt) {
//   evt.preventDefault();

//   const { query, days } = evt.currentTarget.elements;
//   getWeather(query.value, days.value)
//     .then((data) => (list.innerHTML = createMarkup(data.forecast.forecastday)))
//     .catch((err) => console.log(err));
// }


// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { text, icon },
//         },
//       }) => `<li>
//     <img src="${icon}" alt="${text}">
//     <p>${text}</p>
//     <h2>${date}</h2>
//     <h3>${avgtemp_c}</h3>
// </li>`
//     )
//     .join("");
// }

// RYSITCH
