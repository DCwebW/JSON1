//début de la fonction getReponse()
async function getReponse() {   
    //Récupération de la value de l'input qui contiendra l'url     
    const urlWeb = document.getElementById('urlEcrite').value;
    
    //api
    const url = `https://seo-fast-audit.p.rapidapi.com/?url=${urlWeb}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c',
            'X-RapidAPI-Host': 'seo-fast-audit.p.rapidapi.com'
        }
    };

    //si l'url est bien récupérée, alors le try s'activera
    try {
        const response = await fetch(url, options);
        const resultat = await response.json();             //la variable resultat contient la réponse de l'api sous la forme d'un objet
        
        //console.log(resultat); vérification de la response récupérée de l'api pour voir tout ce que contient l'objet (clés et valeurs)
console.log(resultat)
        //les variables ci-dessous contiennent les valeurs récupérées de l'objet result de l'api que je souhaiterai afficher.
        let wordsCounts = resultat.result.wordsCounts;  // résultat est la variable de la reponse de l'api. Grâce à elle, je peux accéder à la propriété  "result", ainsi à wordscounts pour récupérer sa valeur 
        let h1 = resultat.result.h1['counts'];
        let a = resultat.result.a['counts'];
        let wordpress = resultat.result.wordpress;
        let shopify = resultat.result.shopify;
        let prestashop = resultat.result.prestashop;

        //Récupération de la balise div de mon index.html. J'y afficherai mes futurs éléments ci-dessus.
        let baliseDiv = document.getElementById("element");

      
       let pH1 = document.createElement("p");   //création de la balise <p> (balise enfant)
        let p = baliseDiv.appendChild(pH1);       //je rattache <p> à son parent baliseDiv
        p.innerHTML = "h1 : " + h1;                //puis j'affiche dans la balise créé <p>, la valeur de h1 (voir ligne 26)

      let  plink = document.createElement("p");
        let pa= baliseDiv.appendChild(plink);
        p.innerHTML = "nbre de a : " + a;

       let pWordCount = document.createElement('p');
        let pw = baliseDiv.appendChild(pWordCount);
        pw.innerHTML = "Word count = " + wordsCounts;

      let  pwordpress = document.createElement("p");
        let wp = baliseDiv.appendChild(pwordpress);
        wp.innerHTML = "wordpress : " + wordpress;

      let  pprestashop = document.createElement("p");
        let presta = baliseDiv.appendChild(pprestashop);
        presta.innerHTML = "prestashop : " + prestashop;

      let  pshopify = document.createElement("p");
        let shopi = baliseDiv.appendChild(pshopify);
        shopi.innerHTML = "shopify : " + shopify;
        
    } catch (error) {
        console.error(error);
    }
} //fin de la fonction getReponse()


