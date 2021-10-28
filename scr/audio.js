export function audio(scr, header) {
    return `<div class="galery-card">
                <div class="galery-card--illustr"><audio controls muted src="${scr}"></audio></div> 
                <p>${header}</p>      
            </div>`;
}