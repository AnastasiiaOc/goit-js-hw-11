
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function getImage(image) {
    const API_KEY = '42682371-e3b8e1b66bf677808532dae55';
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
        }  return resp.json();
        });
       // method responseJSON always poverne promise,that's why we need second "then"
}







