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

    paste.innerHTML =template


}
form.addEventListener("submit", showGifts);









/*
const url ='https://api.giphy.com/v1/gifs/search';
let busqueda = "?q=";
const key ='&api_key=LubDDF2EJwRpbDJy6aHJpc1NbUAP5WSa';
const limite = "&limit=25";

let q="";

let urlCompleta ="";
//urlCompleta = url + busqueda + q + key + limite; //esta se supone es mi url completa, puede cambiar o variar XD
const btn = document.getElementById('btn');  s

btn.onclick = () =>{
    document.getElementById("portfolio").innerHTML ="";
    q = document.getElementById('search').value;
    urlCompleta = url + search + q + key + limite;
    getData();
}
//obtener info

const getData = async() =>{
    await fetch(urlCompleta).then((response) =>{
        return response.json();
    }).then((giphy) =>{
        console.log(giphy);
    
    for(let i= 0; i< giphy.data.length; i++){

        const gif = document.createElement('img');
        gif.src =giphy.data[i].images["original"].url;  //para acceder a la fotografia en esa posicion dentro de los datos
        gif.className = "mb-3";
        Document.getElementById("portfolio").appendChild(gif);
    }
    })
}

getData();

*/