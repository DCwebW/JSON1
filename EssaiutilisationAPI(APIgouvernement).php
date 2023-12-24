<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

h1,h2,p{
    text-align: center;
}
</style>
<body>
    <form action="" method="get">

    <label for="">Entrez votre code postal</label>
    <input type="text" name="code" id="code">
    <button type="submit" >Envoyer</button>
    </form>
    

<?php
// script_proxy.php

// Configurer les en-têtes CORS pour autoriser toutes les origines
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// Vérifier la méthode de la requête
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Répondre aux requêtes OPTIONS avec les en-têtes CORS
    exit();
}
$userInput = isset($_GET['code']) ? $_GET['code'] :'';
// Récupérer les données de la requête d'origine
// $data = file_get_contents('php://input');

// Faire une nouvelle requête vers l'API distant
$api_url = 'https://geo.api.gouv.fr/communes?nom='.$userInput;
$api_response = file_get_contents($api_url);// , false, stream_context_create([
//     'http' => [
//         'method' => $_SERVER['REQUEST_METHOD'],
//         'header' => "Content-Type: application/json",
//         'content' => $data,
//     ],
// ]));

// Répondre avec la réponse de l'API distant
$donnees= json_decode($api_response,true);
var_dump($donnees);

foreach($donnees as $commune){
    echo "<h1>".$commune["nom"]."</h1><br><h2>".$commune['codesPostaux'][0]."</h2>"."<p>Population en nombre d'habitants : ".$commune['population']."</p>";
}
?>

</body>
</html>

