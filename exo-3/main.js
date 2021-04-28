var title="<h1>Devine le nombre entre 1 et 100</h1>"
var input="<input type='text' id='name' >";
var button="<button id='btn'>Entrer</button>";
var number=90;
var once=0;
$(document).ready(function(){
    
    $("body").prepend(title,input,button)
    $("button").click(function(){ 
     once++;
     if($("#name").val()==false){
        alert("veuillez entrer un nombre");
    }else if(isNaN($("#name").val())){
        alert("veuillez entrer un nombre");
    }else if(($("#name").val()==number)){
        alert("Bravo tu as trouvé le bon numéro , nombre d'essai : " + once );
    }else if(($("#name").val()<number)){
        alert("le nombre à trouver est supérieur" );
    }else if(($("#name").val()>number)){
        alert("le nombre à trouver est inférrieur");
    }
 
})

})