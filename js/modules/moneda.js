export default{
    monedas: {dolar:628.68, uf:26648.67, euro:740.67},
    data:`
        <h2>Autora: Camila Acuña</h2>
        
        Valor en pesos CL<br>
        <input id="valor" type="number"/> <br>
        <input id="dolar" type="radio" name="moneda" value="dolar"/> a Dolar
        <input id="uf" type="radio" name="moneda" value="uf"/> a UF
        <input id="euro" type="radio" name="moneda" value="euro"/> a Euro
        <br><br>
        <button onclick="calcular()">Calcular</button>

        <p id="resp"></p>

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

            
            
        }else{
            console.log("NO SALIO");
        }

    }
}