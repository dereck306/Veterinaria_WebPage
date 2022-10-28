var slideImg = document.getElementById("slideImg");

var images = new Array(
    "imgs/perro_picina.png",
    "imgs/hotel_1.png",
    "imgs/hotel_2.png",
);

var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}