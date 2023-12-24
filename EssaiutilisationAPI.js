
let result

const aff = document.querySelector('#affichage')

window.onload= function() {



    function afficher(donnée){
 console.log(donnée)

aff.innerHTML= donnée.results[0].name.first+" "+donnée.results[0].name.last

 var aff2 = document.createElement('p')
 document.body.appendChild(aff2)
aff2.innerHTML = donnée.results[0].email

 



    }

fetch('https://randomuser.me/api/')
.then(response=>response.json())
.then(data=> { afficher(data)})
.catch(error=>console.error('Erreur dans le fetch',error))







}
