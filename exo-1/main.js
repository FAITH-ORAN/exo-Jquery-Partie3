var title="<h1>Créer un input qui récupère le nombre de clics sur un bouton</h1>"
var input="<input type='text' id='name' >";
var button="<button>cliquez-sur moi</button>";
var count= 0;

$(document).ready(function(){
$("body").prepend(title,input,button);//j'ai utilisé la méthode prepend pour ajouter des élèments créé en fichier js à mon body
$("button").click(function(){
    count++;
    $("#name").attr("value",count);//j'ai ajoutté l'attribu valeur qui affiche le nombre de clique
});
});

