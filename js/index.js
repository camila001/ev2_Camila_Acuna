import moneda from './modules/moneda.js';

var caja = document.getElementById('caja');

window.calcular = moneda.calcular;

document.getElementById('moneda').addEventListener('click',()=>{
    caja.innerHTML = moneda.data;
    
});

document.getElementById('pasteles').addEventListener('click',()=>{
    caja.innerHTML = "Pasteles owo";
    
});