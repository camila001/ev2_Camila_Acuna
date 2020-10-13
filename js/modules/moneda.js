export default {
    valores: {dolar:628.68, uf:26648.67, euro:740.67},
    data:`
        <div border="1px solid red" width="400">
            <h3>Autora: Camila Acuña</h3>
        
            Valor en pesos CL<br>
            <input id="valor" type="number"/> <br>
            <input id="dolar" type="radio" name="moneda" value="dolar"/> a Dolar
            <input id="uf" type="radio" name="moneda" value="uf"/> a UF
            <input id="euro" type="radio" name="moneda" value="euro"/> a Euro
            <br><br>
            <button onclick="calcular()">Calcular</button>

            <p id="resp"></p>
        </div>
    `,
    calcular:function(){
        var valor = document.getElementById('valor').value;
        var radios = document.getElementsByName('moneda');
        var moneda = "";
        var resp = document.getElementById('resp');

        if(valor!=""){
            radios.forEach(item =>{
                if(item.checked){
                    moneda = item.value;
                }
            });

            var total ="";
            

            if(moneda == "dolar"){
                total = valor/this.valores.dolar;
                resp.innerHTML = "Equivale a "+total.toFixed(0) + " dolares";
                resp.style.color = "blue";
            }else if(moneda == "uf"){
                total = valor/this.valores.uf;
                resp.innerHTML = "Equivale a "+total.toFixed(0)+" UF";
                resp.style.color = "blue";
            }else if(moneda == "euro"){
                total = valor/this.valores.euro;
                resp.innerHTML = "Equivale a "+total.toFixed(0)+" euros";
                resp.style.color = "blue";
            }else{
                resp.innerHTML="Seleccione conversion";
                resp.style.color ="red";
            }
            
            
        }else{
            resp.style.color ="red";
            resp.innerHTML = "Ingrese valor";
        }

    }
}