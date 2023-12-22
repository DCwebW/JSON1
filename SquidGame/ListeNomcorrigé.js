const input = document.querySelector('input')
const p = document.querySelector('p') 

// affichage 

function dispay(array){
    array.forEach(element => {
        p.innerHTML += `<p>${element.name}</p>`
    });
}

//fetch 
async function get(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()
    dispay(data)
}
get()



// filter 

function filter(array){
    const filter = array.filter(element => element.name.includes(input.value))
    p.innerHTML = ''
    dispay(filter)
}