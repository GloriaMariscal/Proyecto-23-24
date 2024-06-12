//Distintas funciones que sirven para manejar las cookies.
function setCookie(nombre, valor, dias) {
    let expiracion = "";
    if (dias) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        expiracion = "; expiracion=" + fecha.toUTCString();
    }
    document.cookie = nombre + "=" + (valor || "") + expiracion + "; ruta=/";
}

function getCookie(nombre) {
    const nombre2 = nombre + "=";
    const a = document.cookie.split(";");
    for (let i = 0; i < a.length; i++) {
        let b = a[i];
        while (b.charAt(0) == " ") b = b.substring(1, b.length);
        if (b.indexOf(nombre2) == 0) return b.substring(nombre2.length, b.length);
    }
    return null;
}

function eraseCookie(nombre) {
    document.cookie = nombre + "=; Max-Age=-99999999;";
}

document.addEventListener("DOMContentLoaded", function () {
    const consentirCookies = document.getElementById("consentirCookies");
    const aceptarCookies = document.getElementById("aceptarCookies");
    const rechazarCookies = document.getElementById("rechazarCookies");

    //Emiliar las cookies al cargar la página.
    eraseCookie("cookies_aceptadas");
    eraseCookie("cookies_rechazadas");

    //Mostrar el mensaje de aviso de las cookies.
    consentirCookies.style.display = "block";

    aceptarCookies.addEventListener("click", function () {
        setCookie("cookies_aceptadas", "true", 365);
        consentirCookies.style.display = "none";
    });

    rechazarCookies.addEventListener("click", function () {
        setCookie("cookies_rechazadas", "true", 365);
        consentirCookies.style.display = "none";
    });
});
