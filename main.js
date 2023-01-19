const form = document.querySelector("#form");
const input =document.querySelector("#search");
const paste = document.querySelector("#gifts");
const END_POINT_SEARCH = "https://api.giphy.com/v1/gifs/search";
const END_POINT_RANDOM = "https://api.giphy.com/v1/gifs/random";
const MY_API_KEY = "LubDDF2EJwRpbDJy6aHJpc1NbUAP5WSa";  




const showGifts = async (e) =>{
    e.preventDefault();
    console.log(input.value);

    const URL = `${END_POINT_SEARCH}?api_key=${MY_API_KEY}&q=${input.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    let template= '';
    data.data.forEach(element => {
        const {url} = element.images.original;

        /*const{images} = gif;
        const{original}= images
        const{url}=original
        */

        template+= `<img width="100px" height="100px" src="${url}"/>`


        
    });

    
    paste.innerHTML= template;



}
//random will be when I change my page
const random = async () =>{
    let URL= `${END_POINT_RANDOM}?api_key=${MY_API_KEY}`;
    const response = await fetch(URL);
    const element = await response.json();
    console.log(element)
    const {url} = element.data.images.original;

    paste.innerHTML= `<img width="100%" height="100p%" class= "p-3 m-1 img-thumbnail" src="${url}" alt="img-random"/>`;

}
form.addEventListener("submit", showGifts);
document.addEventListener("DOMContentLoaded", random );



