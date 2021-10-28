import imgOneScr from '../media/images/1.jpg';
import imgTwoScr from '../media/images/2.jpg';
import imgThreeScr from '../media/images/3.jpg';
import imgFourScr from '../media/images/4.gif';
import audioOneScr from '../media/audio/1.mp3';
import audioTwoScr from '../media/audio/2.mp3';
import audioThreeScr from '../media/audio/3.mp3';
import vidioOneScr from '../media/video/1.mp4';
import vidioTwoScr from '../media/video/2.mp4';
import { renderImgCard } from './renderImg.js';

const items = [
    { scr: imgOneScr, header: 'Водяная мельница' },
    { scr: imgTwoScr, header: 'Лужа в горах' },
    { scr: imgThreeScr, header: 'Красная баня в красной деревне' },
    { scr: imgFourScr, header: 'Белый кот на белых вершинах' },
    { scr: audioOneScr, header: 'Восход' },
    { scr: audioTwoScr, header: 'Ручей' },
    { scr: audioThreeScr, header: 'Сечерние Верчки' },
    { scr: vidioOneScr, header: 'Rick Astley - Never Gonna Give You Up' },
    { scr: vidioTwoScr, header: 'Волна волной' }
]
console.log(items);
renderImgCard(items);