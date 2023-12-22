
let result

window.onload= function() {

fetch('https://randomuser.me/api/')
.then(response=>response.json())
.then(data=> { result = data;console.log(result.results[0].gender)})
.catch(error=>console.error('Erreur dans le fetch',error))







}
