function getOrder(){
    let pizzaCrust = document.getElementById("crust").value;
    let pizzaFlavour = document.getElementById("flavour").value;
    let pizzaSize = document.getElementById("size").value;
    let pizzaExtras = document.getElementById("extras").value;

    console.log(pizzaCrust)
    console.log(pizzaFlavour)
    console.log(pizzaSize)
    console.log(pizzaExtras)
    document.getElementById('result').textContent = "This is  " + pizzaCrust + pizzaFlavour + pizzaSize + pizzaExtras;





}