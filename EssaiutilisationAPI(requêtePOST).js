
 const requestData = {Daryl: 'newrandomuser'};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {console.log(data);})
.catch(error => {console.error('Erreur lors de la requête:', error);})
                            


                            // Traiter les données reçues de l'API
                            


