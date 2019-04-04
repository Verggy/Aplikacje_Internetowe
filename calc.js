
const fields = [
    {txt:1,col:1, row:4},
    {txt:2, col:2, row:4},
    {txt:3, col:3, row:4},
    {txt:4, col:1, row:3},
    {txt:5, col:2, row:3},
    {txt:6, col:3, row:3},
    {txt:7, col:1, row:2},
    {txt:8, col:2, row:2},
    {txt:9, col:3, row:2},
    {txt:0, col:'1/span 2', row:5},
    {txt:'C', col:4, row:2},
    {txt:'+', col:4, row:3},
    {txt:'-', col:4, row:4},
    {txt:'=', col:4, row:5},
    {txt:'.', col:3, row:5},
    {txt:'DISPLAY', col:'1/span 4', row:1},];

const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    container.style.border = '1px solid black';
    document.body.appendChild(container);

    for(let i = 0; i < 16; ++i){
        const div = document.createElement('div');
        div.textContent = fields[i].txt;
        div.style.gridColumn = fields[i].col;
        div.style.gridRow = fields[i].row;
        container.appendChild(div);
        div.addEventListener
    }

}

window.addEventListener('DOMContentLoaded',init);
