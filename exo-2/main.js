var title="<h1>Créer deux boutons. L'un pour incrémenter; l'autre pour décrémenter. Un input récupère les valeurs.</h1>"
var input="<input type='text' id='name' >";
var button="<button id='btn'>incrémenter</button>";
var button2="<button id='btn2'>décrémenter</button>";
var count= 0;

$(document).ready(function(){


$("body").prepend(title,input,button,button2);
$("#btn").click(function(){
    count++;
    $("#name").attr("value",count);//j'ai ajoutté l'attribu valeur qui affiche le nombre de clique
});
$("#btn2").click(function(){
    count--;
    $("#name").attr("value",count);//j'ai ajoutté l'attribu valeur qui affiche le nombre décrémenter de clique
});
});
