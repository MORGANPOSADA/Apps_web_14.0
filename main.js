const url ='https://api.giphy.com/v1/gifs/search';
let busqueda = "?q=";
const key ='&api_key=LubDDF2EJwRpbDJy6aHJpc1NbUAP5WSa';
const limite = "&limit=25";

let q="";

let urlCompleta ="";
//urlCompleta = url + busqueda + q + key + limite; //esta se supone es mi url completa, puede cambiar o variar XD
const btn = document.getElementById('btn');  /*Se tiene acceso al boton */

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

