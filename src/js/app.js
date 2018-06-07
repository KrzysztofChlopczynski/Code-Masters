import {Slider} from './slider';
import {parallax} from './parallax';
import {header} from './header';
import {map} from './map';
import {form} from './form-jquery'; //w src/js/ jest jeszcze wersja jquery

//wyjatkowa sytuacja
//google map w linku podaje odniesienie do tej funkcji
//webpack nam zamyka caly kod w moduly, ktore nie sa widoczne na zewnatrz
//zeby ta funkcja byla widoczna na zewnatrz, dodajemy ja do obiektu window
window.initMap = function() {
    map();
};

//po zaladowaniu dokumentu odpalamy co należy
//zauważ, że DOMContentLoaded dopiero tutaj użyliśmy
document.addEventListener('DOMContentLoaded', function() {

    parallax();
    header();
    form();

    const slider = new Slider('.banner', {
        pauseTime : 5000
    });

});
