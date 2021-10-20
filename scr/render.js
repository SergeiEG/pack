const calcBlock = document.querySelector('.block__calc');
const timeBlock = document.querySelector('.block__timer');
const calcBtn = document.querySelector('.calc-btn').addEventListener('click', event => expChapter(event.target));
const timeBtn = document.querySelector('.timer-btn').addEventListener('click', event => expChapter(event.target));

function expChapter(chap) {
    if (chap.dataset.item === 'calc') {
        close(timeBlock);
        open(calcBlock);
    } else if (chap.dataset.item === 'time') {
        close(calcBlock);
        open(timeBlock);
    } else console.log('error');
}

function open(el) {
    el.classList.remove('close');
    el.classList.add('open');
}

function close(el) {
    el.classList.remove('open');
    el.classList.add('close');
}