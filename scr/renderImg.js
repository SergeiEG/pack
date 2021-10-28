import { illustrations } from "./illustrations.js";
import { audio } from "./audio.js";
import { video } from "./video.js";

export function renderImgCard(list) {
    const galery = list.map((item) => {
        if (/\.(png|jpe?g|gif)$/i.test(item.scr)) {
            return illustrations(item.scr, item.header);
        } else if (/\.mp3$/i.test(item.scr)) {
            return audio(item.scr, item.header);
        } else if (/\.mp4$/i.test(item.scr)) {
            return video(item.scr, item.header);
        }
    });
    document.querySelector('.galery').innerHTML = galery.join(' ');
}