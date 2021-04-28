var div="<div></div>";
var button1="<button id='btn1'>Hauteur</button>";
var button2="<button id='btn2'>Cacher</button>";
var button3="<button id='btn3'>Changer couleur</button>";
var button4="<button id='btn4'>couleur initiale</button>";
var button5="<button id='btn5'>reaparaitre</button>";

$(document).ready(function(){
    $("body").prepend(div,button1,button2,button3,button4,button5);
    $("div").css({"backgroundColor":"pink", "height":"200px"})
    $("#btn1").click(function(){
        $("div").height("70px");
    })
    $("#btn2").click(function(){
        $("div").hide();
    })
    $("#btn3").click(function(){
        $("div").css("backgroundColor","blue");
    })
    $("#btn4").click(function(){
        $("div").css("backgroundColor","pink");
    })
    $("#btn5").click(function(){
        $("div").show();
    })
})