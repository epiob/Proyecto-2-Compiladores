var dormitorio = document.getElementsByClassName('dormitorio');
var sala = document.getElementsByClassName('sala');
var comedor = document.getElementsByClassName('comedor');
var cocina = document.getElementsByClassName('cocina');
var keywords = ["apagar", "encender", "dormitorio", "sala", "comedor", "cocina"];

/*const form1 = document.getElementById('encender-todo');
form1.onsubmit = (e) => {
    e.preventDefault();
    dormitorio[0].style.backgroundColor = "blue";
    sala[0].style.backgroundColor = "blue";
    comedor[0].style.backgroundColor = "blue";
    cocina[0].style.backgroundColor = "blue";
}

const form0 = document.getElementById('apagar-todo');
form0.onsubmit = (a) => {
    a.preventDefault();
    dormitorio[0].style.backgroundColor = "white";
    sala[0].style.backgroundColor = "white";
    comedor[0].style.backgroundColor = "white";
    cocina[0].style.backgroundColor = "white";
}*/

const formI = document.getElementById('input-casa');
formI.onsubmit = (z) => {
    z.preventDefault();
    var frase = document.getElementById('form-casa').value;
    frase = frase.toLowerCase();

    if (frase.indexOf("encender") > -1) {

        if (frase.indexOf("dormitorio") > -1) {
            dormitorio[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("sala") > -1)) {
            sala[0].style.backgroundColor = "blue";
        } else if (frase.indexOf("comedor") > -1) {
            comedor[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("cocina") > -1)) {
            cocina[0].style.backgroundColor = "blue";
        }

        if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("sala") > -1)) {
            dormitorio[0].style.backgroundColor = "blue";
            sala[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("comedor") > -1)) {
            dormitorio[0].style.backgroundColor = "blue";
            comedor[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("cocina") > -1)) {
            dormitorio[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("sala") > -1) && (frase.indexOf("comedor") > -1)) {
            sala[0].style.backgroundColor = "blue";
            comedor[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("sala") > -1) && (frase.indexOf("cocina") > -1)) {
            sala[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("comedor") > -1) && (frase.indexOf("cocina") > -1)) {
            comedor[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
        }

        if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("sala") > -1) && (frase.indexOf("comedor") > -1)) {
            dormitorio[0].style.backgroundColor = "blue";
            sala[0].style.backgroundColor = "blue";
            comedor[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("sala") > -1) && (frase.indexOf("cocina") > -1)) {
            dormitorio[0].style.backgroundColor = "blue";
            sala[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("comedor") > -1) && (frase.indexOf("cocina") > -1)) {
            dormitorio[0].style.backgroundColor = "blue";
            comedor[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
        } else if ((frase.indexOf("sala") > -1) && (frase.indexOf("comedor") > -1) && (frase.indexOf("cocina") > -1)) {
            sala[0].style.backgroundColor = "blue";
            comedor[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
        }

        if (frase.indexOf("todo") > -1) {
            comedor[0].style.backgroundColor = "blue";
            sala[0].style.backgroundColor = "blue";
            cocina[0].style.backgroundColor = "blue";
            dormitorio[0].style.backgroundColor = "blue";
        }
    } else if (frase.indexOf("apagar") > -1) {
        if (frase.indexOf("dormitorio") > -1) {
            dormitorio[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("sala") > -1)) {
            sala[0].style.backgroundColor = "white";
        } else if (frase.indexOf("comedor") > -1) {
            comedor[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("cocina") > -1)) {
            cocina[0].style.backgroundColor = "white";
        }

        if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("sala") > -1)) {
            dormitorio[0].style.backgroundColor = "white";
            sala[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("comedor") > -1)) {
            dormitorio[0].style.backgroundColor = "white";
            comedor[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("cocina") > -1)) {
            dormitorio[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("sala") > -1) && (frase.indexOf("comedor") > -1)) {
            sala[0].style.backgroundColor = "white";
            comedor[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("sala") > -1) && (frase.indexOf("cocina") > -1)) {
            sala[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("comedor") > -1) && (frase.indexOf("cocina") > -1)) {
            comedor[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
        }

        if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("sala") > -1) && (frase.indexOf("comedor") > -1)) {
            dormitorio[0].style.backgroundColor = "white";
            sala[0].style.backgroundColor = "white";
            comedor[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("sala") > -1) && (frase.indexOf("cocina") > -1)) {
            dormitorio[0].style.backgroundColor = "white";
            sala[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("dormitorio") > -1) && (frase.indexOf("comedor") > -1) && (frase.indexOf("cocina") > -1)) {
            dormitorio[0].style.backgroundColor = "white";
            comedor[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
        } else if ((frase.indexOf("sala") > -1) && (frase.indexOf("comedor") > -1) && (frase.indexOf("cocina") > -1)) {
            sala[0].style.backgroundColor = "white";
            comedor[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
        }

        if (frase.indexOf("todo") > -1) {
            comedor[0].style.backgroundColor = "white";
            sala[0].style.backgroundColor = "white";
            cocina[0].style.backgroundColor = "white";
            dormitorio[0].style.backgroundColor = "white";
        }
    } else {
        alert('Error en sintaxis, para mas informacion haga click en Ayuda')
    }

}