
//Add the JavaScript here for the function billingFunction().
//It is responsible for setting and clearing the fields in Billing Information 
//get references to the input elements


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