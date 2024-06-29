export default getImage;

function getImage(image) {
    // const API_KEY = '42682371-e3b8e1b66bf677808532dae55';

    const API_KEY = '44666739-d0cf1ddb18f9d30146fa54081';
    const BASE_URL = 'https://pixabay.com/api/';
    const searchParams = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    });
    console.log(searchParams.toString());
//fetch always poverne promise
    return fetch(`${BASE_URL}?${searchParams}`)
        .then((resp) => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
            //throw is like return that brings us to "catch"
            }
            return resp.json();
        })
    //     .then(data => {
    //     console.log(data)
    // })
    //    .catch(error => {
    //     alert('Incorrect request!')
    // })  // method responseJSON always poverne promise,that's why we need second "then"
}




// Вітсутня загальна обробка помилок на єтапі запиту у функції getImage
// Враховуючи вказані критичні питання, завдання не може бути прийняте у його поточному стані. Після того, як критичні помилки будуть вирішені і закоментований код буде вирішений, будь ласка, переісправте для ще однієї оцінки