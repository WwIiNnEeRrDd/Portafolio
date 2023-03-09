
function focus(){
    document.getElementsByClassName('contacto-input-text').focus();
}


var ubicacion = window.scrollY;

window.onscroll = function(){
    var desplazamiento = window.scrollY;

    if(ubicacion >= desplazamiento){
        document.getElementById('navbar').style.top = '0';
    }
    
    else{
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacion = desplazamiento;
}