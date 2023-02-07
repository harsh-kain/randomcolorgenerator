let btn = document.getElementById('btn');
let code = document.getElementById('code');
let container = document.getElementById('container');
var symbols = "0123456789ABCDEF";
var color = "#"; 
btn.addEventListener('click' , ()=> {
    for (let i = 0; i < 6; i++) {
       color = color + symbols[Math.floor(Math.random() * 16)];
    }
    container.style.background = color;
    code.style.color = color; 
    code.innerHTML = color;
    btn.style.color = color;
    btn.style.borderColor = color;
    color = "#";
});
