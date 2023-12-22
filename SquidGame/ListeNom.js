var requestUrl =" https://jsonplaceholder.org/users"

var request =  new XMLHttpRequest()

request.open("GET", requestUrl, true)

request.setRequestHeader("content-type", "application/json");

request.onreadystatechange = function (){
    if (request.readyState === 4 && request.status === 200){

    let mesDonnées= JSON.parse(request.reponseText)

    let ListeNom= document.getElementById("output")}}


    async function getListe(){
        const reponse = await fetch(`" https://jsonplaceholder.org/users"`);
        const data = await reponse.json();
        return data.users;
            
    }
    
    async function init(){
        const recettes = await getListe();
        console.log(recettes)
        displayRecettes(recettes)
    }
    init();


    