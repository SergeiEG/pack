export function video(scr, header) {
    return `<div class="galery-card">
                <div class="galery-card--illustr"><video controls src="${scr}"></video></div> 
                <p>${header}</p>      
            </div>`;
}