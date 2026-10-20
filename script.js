//les variables dont on a besoins
let sp, btn_start, btn_stop, btn_rest, h, min, s, ms,t;

// fonction de initialiser les variables
window.onload = function () {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    h = 0, min = 0, s = 0, ms = 0;
}

//metre le compteur
function update_chrono() {
    ms += 1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        min += 1;
    }
    if (min == 60) {
        min = 0;
        h += 1;
    }
    //insertion des valeurs dans html
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
//fonction start
function start() {
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}
//stper
function stop() {
    clearInterval(t);
     btn_start.disabled = false;
}
function restart() {
     clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, min = 0, h = 0;
     //insertion des valeurs dans html
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
