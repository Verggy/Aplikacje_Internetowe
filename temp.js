if(key === '0' && disp.textContent === '0')return;
if(key === '.' && disp.textContent.includes('.')) return;
if(key !== '.' || clearFlag){
    disp.textContent = key;
}
else{
    disp.textContent += key;
}
break;