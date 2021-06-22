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


//fill form in checkout2









}




//function to make the table visible

    function display() {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("orderconfirm").style.visibility = "visible";

        return false;
    }

function display2() {
    document.getElementById("qn").style.visibility = "visible";
    document.getElementById("phonenumber").style.visibility = "visible";
    document.getElementById("confirmphone").style.visibility = "visible";



    return false;
}

function alertbox() {
    window.alert("Due to Covid-19 Restrictions, we only do deliveries within Nairobi at a fixed charge of 200Kshs.");
}

function getNumber(){
    let number = document.getElementById("phonenumber").value;
    delivery=200;
    final=nPrice+delivery;
    window.alert("Thankyou for your order. Our delivery team will reach you on +254" +number+" within the next hour when the order has been dispatched. Your total payable plus delivery fee is\n" +final+" Kshs.")

    document.getElementById('deliveryrow').textContent = delivery+" Kshs";
    document.getElementById('totalrow').textContent = final+" Kshs";

    document.getElementById("qn").style.visibility = "hidden";
    document.getElementById("phonenumber").style.visibility = "hidden";
    document.getElementById("confirmphone").style.visibility = "hidden";
    document.getElementById("orderconfirm").style.visibility = "hidden";
    document.getElementById("order2").style.visibility = "visible";










}







