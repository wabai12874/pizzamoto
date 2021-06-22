function getOrder(){
    let pizzaCrust = document.getElementById("crust").value;
    let pizzaFlavour = document.getElementById("flavour").value;
    let pizzaSize = document.getElementById("size").value;
    let pizzaExtras = document.getElementById("extras").value;

    console.log(pizzaCrust)
    console.log(pizzaFlavour)
    console.log(pizzaSize)
    console.log(pizzaExtras)

    if (pizzaCrust==="Regular"){
        if (pizzaSize==="Small"){
            initPrice=200;
            toppin=500;
            newprice= initPrice+toppin;
        }
        else if (pizzaSize==="Medium"){
            initPrice=300;
            toppin=700;
            newprice= initPrice+toppin;

        }
        else if (pizzaSize==="Large"){
            initPrice=400;
            toppin=900;
            newprice= initPrice+toppin;

        }

    }

    else if (pizzaCrust==="Gluten-Free"){

        if (pizzaSize==="Small"){
            initPrice=250;
            toppin=500;
            newprice= initPrice+toppin;

        }
        else if (pizzaSize==="Medium"){
            initPrice=350;
            toppin=700;
            newprice= initPrice+toppin;


        }
        else if (pizzaSize==="Large"){
            initPrice=450;
            toppin=900;
            newprice= initPrice+toppin;

        }


    }
    else if(pizzaCrust==="Stuffed"){

        if (pizzaSize==="Small"){
            initPrice=300;
            toppin=500;
            newprice= initPrice+toppin;

        }
        else if (pizzaSize==="Medium"){
            initPrice=400;
            toppin=700;
            newprice= initPrice+toppin;

        }
        else if (pizzaSize==="Large"){
            initPrice=500;
            toppin=900;
            newprice= initPrice+toppin;

        }

    }
    else if (pizzaCrust==="Thin-Crispy"){

        if (pizzaSize==="Small"){
            initPrice=150;
            toppin=500;
            newprice= initPrice+toppin;

        }
        else if (pizzaSize==="Medium"){
            initPrice=250;
            toppin=700;
            newprice= initPrice+toppin;

        }
        else if (pizzaSize==="Large"){
            initPrice=350;
            toppin=900;
            newprice= initPrice+toppin;

        }

    }

    if (pizzaExtras==="None"){
        xCost=0;
        nPrice=newprice+xCost;
    }
    else if (pizzaExtras==="Bacon" || pizzaExtras==="Cheese" || pizzaExtras==="Pepperoni"){
        xCost=250;
        nPrice=newprice+xCost;
    }


    document.getElementById('totalrow').textContent = nPrice+" Kshs";

    document.getElementById('crustrow').textContent = pizzaCrust+" ("+pizzaSize+")";

    document.getElementById('flavourrow').textContent = pizzaFlavour +" (at " +toppin+"/=)";

    document.getElementById('sizerow').textContent = pizzaSize+" (at "+initPrice+"/=)";

    document.getElementById('toppingsrow').textContent = pizzaExtras+" (at "+xCost+"/=)";

















}
//function to make the table visible

    function display() {
        document.getElementById("result").style.visibility = "visible";
        return false;
    }




