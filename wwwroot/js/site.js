// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function zmianaPytania(){
    var $bNastepne=$("#bNastepne")
    var i=0;
    var $pierwszePytanie = $("#pytanie0");

    $pierwszePytanie.slideToggle(500);
    $bNastepne.on("click",function(){
        let poprzednie ="#pytanie"+i;
        let $poprzednie =$(poprzednie);
        $poprzednie.toggle(0);
        i++;
        let nastepne ="#pytanie"+i;
        let $nastepne =$(nastepne);
        $nastepne.toggle(200);
    });
}
function loginPop(){
    var $loginPopUp = $("#loginPopUp");
    var $zaloguj = $("#zaloguj");
    

    $zaloguj.on("click",function (){
        $loginPopUp.slideToggle(200);
    });
}



$(document).ready(function () {
    zmianaPytania();
    loginPop();
});