const carouselSlide = document.querySelector('.imagenes_carousel');
const carouselImagenes = document.querySelectorAll('.imagenes_carousel img');

let contador = 0;
const tamanno = carouselImagenes[0].clientWidth;

const btnant = document.querySelector('.btnant');
const btnpos = document.querySelector('.btnpos');

const img_siguiente = () => {
    if (contador >= carouselImagenes.length - 1) {
        contador = -1;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    contador++;
    carouselSlide.style.transform = 'translateX(' + (-tamanno * contador) + 'px)';
}

const img_anterior = () => {
    if (contador <= 0) {
        contador = carouselImagenes.length;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    contador--;
    carouselSlide.style.transform = 'translateX(' + (-tamanno * contador) + 'px)';
}

let slide_intervalo = setInterval(img_siguiente, 5000);

btnpos.addEventListener('click', () => {
    img_siguiente();
    clearInterval(slide_intervalo);
    slide_intervalo = setInterval(img_siguiente, 5000);
});

btnant.addEventListener('click', () => {
    img_anterior();
    clearInterval(slide_intervalo);
    slide_intervalo = setInterval(img_siguiente, 5000);
});