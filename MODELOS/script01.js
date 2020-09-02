document.querySelector('.b1').addEventListener("click", trocamanha, false);
document.querySelector('.b2').addEventListener("click", trocatarde, false);
document.querySelector('.b3').addEventListener("click", trocanoite, false);

function trocamanha() {
    var comprimentar = "Bom dia!";
    document.querySelector('h1').innerHTML = comprimentar;
    document.querySelector('body').style.backgroundColor = "#63bfb5"
    document.querySelector('div.img').style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_960_720.jpg)";
}

function trocatarde() {
    var comprimentar = "Boa tarde!";
    document.querySelector('h1').innerHTML = comprimentar;
    document.querySelector('body').style.backgroundColor = "#adab2b";
    document.querySelector('div.img').style.backgroundImage = "url(https://cdn.pixabay.com/photo/2020/05/26/10/41/sunset-5222626_960_720.jpg)";
}

function trocanoite() {
    var comprimentar = "Boa noite!";
    document.querySelector('h1').innerHTML = comprimentar;
    document.querySelector('body').style.backgroundColor = "#302d2d"
    document.querySelector('div.img').style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_960_720.jpg)";
}