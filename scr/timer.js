import { formatError } from './utils.js'
import {} from '../node_modules/howler/dist/howler.js';

const timerForm = document.getElementById('timer');
const timerText = document.getElementById('timer__text');
const timerInput = document.getElementById("time");
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let timer;
var sound = new Howl({
    src: ['../sounds.mp3'],
    html5: true
});

startBtn.addEventListener('click', timeCalc);
stopBtn.addEventListener('click', clearInterval(timer));


function timeCalc(event) {
    timerText.innerHTML = '';
    event.preventDefault();

    let timeInt = parseInt(timerInput.value) * 60;
    console.log(timeInt);

    timer = setInterval(myTimer, 1000);

    function myTimer() {
        let seconds = timeInt % 60;
        let minutes = timeInt / 60 % 60;
        let hour = timeInt / 60 / 60 % 60;
        if (timeInt <= 0) {
            clearInterval(timer);
            timerText.innerHTML = formatError("Время закончилось");
            sound.play();
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerText.innerHTML = strTimer;
        }
        --timeInt;
    }
}