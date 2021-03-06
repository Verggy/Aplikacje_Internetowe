
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
    mem = op = 0;
    clearFlag = false;
const handleClick = ev => {
    const disp = document.getElementById('display');

    const key = ev.target.textContent;

    switch(key){
        case 'C':
            disp.textContent = '0';
            clearFlag = false;
            mem = 0;
            op = 0;
            break;
        case '+':
        op = 1;
        mem += parseFloat(disp.textContent);
        disp.textContent = '0';
        console.log(mem);
        break;
        case '-':
        op = -1;
            mem -= parseFloat(disp.textContent);
            disp.textContent = '0';
            console.log(mem);
            break;

        case '=':
            if(op === 0){
                mem = parseFloat(disp.textContent);
            }else{
                mem += op * parseFloat(disp.textContent);
                disp.textContent = mem;
             }
            break;
        default:
        if(disp.textContent==="DISPLAY")disp.textContent = null;
        if(disp.textContent==="0" && key !== '.')disp.textContent = null;
        disp.textContent += key;
        break;

    }
}
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
        if(fields[i].txt == 'DISPLAY'){
            div.id = 'display';
        }
        else{
        div.addEventListener('click', handleClick);
        }
    }
}

window.addEventListener('DOMContentLoaded',init);
