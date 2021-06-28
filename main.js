//function to get the input of the user and key it into the order table and for price computation
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
//constructor function to build pizza


var pizzaBuild = function pizza(pizzaCrust, pizzaFlavour, pizzaSize, pizzaExtras){

    this.pizzaCrust=pizzaCrust;
    this.pizzaFlavour=pizzaFlavour;
    this.pizzaSize=pizzaSize;
    this.pizzaExtras=pizzaExtras;

}

function buildYourPizza(){
    let crust= document.getElementById("crust").value;
    let flavour= document.getElementById("flavour").value;
    let size = document.getElementById("size").value;
    let extras=document.getElementById("extras").value;
    console.log(crust)
    console.log(flavour)
    console.log(size)
    console.log(extras)

    var pizzaBuild= function pizza(crust, flavour, size, extras){

    }

    newPizza= new pizzaBuild(crust, flavour, size, extras)
}




//function to make the table visible

    function display() {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("orderconfirm").style.visibility = "visible";



        return false;
    }

    //function to make the enter phone number and zone of pickup visible to the user after he or she accepts the prompts

function display2() {
    document.getElementById("qn").style.visibility = "visible";
    document.getElementById("phonenumber").style.visibility = "visible";
    document.getElementById("zone").style.visibility = "visible";
    document.getElementById("confirmphone").style.visibility = "visible";
    return false;
}
//function to alert the user that deliveries are the only option due to the covid 19 precaution protocols.
function alertbox() {
    window.alert("Due to Covid-19 Restrictions, we only do deliveries within Nairobi at a fixed charge of 200Kshs.");
}

//function to get the phone number and zone of delivery for the pizza to be delivered.
function getNumber(){
    let number = document.getElementById("phonenumber").value;
    let zone = document.getElementById("zone").value;
    delivery=200;
    final=nPrice+delivery;
    window.alert("Thankyou. Your order will be delivered to "+zone+", Nairobi"+ ". Our delivery team will reach you on " +number+" within the next hour when the order has been dispatched. Your total payable plus delivery fee is\n" +final+" Kshs.")
//shows new total price for the user after user accepts delivery option.
    document.getElementById("delrow").style.visibility = "visible";
    document.getElementById('deliveryrow').textContent = delivery+" Kshs";
    document.getElementById('totalrow').textContent = final+" Kshs";
//hides the elements after order completion and displays function for new order to be received.
    document.getElementById("qn").style.visibility = "hidden";
    document.getElementById("phonenumber").style.visibility = "hidden";
    document.getElementById("confirmphone").style.visibility = "hidden";
    document.getElementById("orderconfirm").style.visibility = "hidden";
    document.getElementById("zone").style.visibility = "hidden";
    document.getElementById("order2").style.visibility = "visible";
}














