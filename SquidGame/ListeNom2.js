
const input = document.querySelector('#searchbar')
const ListeNom = document.querySelector('p');
let data





function displayNoms(array) {
    array.forEach(element => {
        ListeNom.innerHTML += `<p>${element.name + "<br></br>" + element.email}<p>`

    });




}


async function getListe() {
    const reponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
     data = await reponse.json();
    console.log(data)
    displayNoms(data)

}
getListe()
function filter(array) {
    const filteredData = array.filter(element => element.name.includes(input.value))
    ListeNom.innerHTML = "";
    displayNoms(filteredData)
}

input.addEventListener('input', () => {
    filter(data);
})


