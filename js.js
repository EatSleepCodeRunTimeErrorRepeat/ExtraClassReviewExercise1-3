/*
Exercise 1


function checkFirstChar(){
    const input1 = document.getElementById("fname").value;
    const firstChar1 = input1.charAt(0);
    const input2 = document.getElementById("lname").value;
    const firstChar2 = input2.charAt(0);
    const uppercaseRegex = /^[A-Z]/;
    if (uppercaseRegex.test(firstChar1, firstChar2)){
        console.log("String's first character is uppercase");
    }else {
        console.log("String's first character is not uppercase");
    }
}


var fruits = ["Apple", "Mango", "Orange", "Grape"];

function loadFruits(){
    var listFruits = "";
    for(let index = 0; index < fruits.length; index++){
        listFruits += "<li>" + fruits[index] + "</li>";
    }
    document.getElementById("fruits").innerHTML = listFruits;
}

function myInput(){
    var fruit = prompt("What  is your favorite fruit?");

    if(fruit.length == 0){
        return;
    }else {
        fruits.push(fruit);

        loadFruits();
    }
}


*/


/*Add the JavaScript here for the function billingFunction().
It is responsible for setting and clearing the fields in Billing Information */
// get references to the input elements


const shippingNameInput = document.getElementById("shipping-name");
const shippingZipInput = document.getElementById("shipping-zip");
const billingNameInput = document.getElementById("billing-name");
const billingZipInput = document.getElementById("billing-zip");
const sameAsShippingCheckbox = document.getElementById("same-as-shipping");

// add event listener to the checkbox
sameAsShippingCheckbox.addEventListener("change", function() {
  if (this.checked) {
    // copy values from shipping to billing
    billingNameInput.value = shippingNameInput.value;
    billingZipInput.value = shippingZipInput.value;
  } else {
    // clear values in billing
    billingNameInput.value = "";
    billingZipInput.value = "";
  }
});