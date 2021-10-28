export function illustrations(imgScr, header) {
    return `<div class="galery-card">
        <figure>
            <img src="${imgScr}">
            <figcaption>${header}</figcaption>
        </figure>
    </div>`;
}