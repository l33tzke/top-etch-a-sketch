function trigger(e) {
    e.srcElement.classList.add('painted-pixel')
}


function init() {
    let etchGrid = document.querySelector('.etch-grid');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement('div');
            div.id = "pixel" + i + "-" + j;
            div.classList.add('etch-pixel');
            div.addEventListener("mouseenter", trigger, {once: true});
            etchGrid.appendChild(div);
        }
    }
}

init();