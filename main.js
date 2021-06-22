function getOrder(){
    let pizzaCrust = document.getElementById("crust").value;
    let pizzaFlavour = document.getElementById("flavour").value;
    let pizzaSize = document.getElementById("size").value;
    let pizzaExtras = document.getElementById("extras").value;

    console.log(pizzaCrust)
    console.log(pizzaFlavour)
    console.log(pizzaSize)
    console.log(pizzaExtras)
    document.getElementById('crustrow').textContent = pizzaCrust;
    document.getElementById('flavourrow').textContent = pizzaFlavour;
    document.getElementById('sizerow').textContent = pizzaSize;
    document.getElementById('toppingsrow').textContent = pizzaExtras;






}
//function to make the table visible

    function display() {
        document.getElementById("result").style.visibility = "visible";
        return false;
    }




