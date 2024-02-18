function Open(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
}

var price = 0;
var qty = 0;
var result = 0;

function order(priceOfOne) {
    price = priceOfOne;
}

function Quantity(ID) {
    qty = parseFloat(document.getElementById(ID).value);
}

function SuccessfullOrder(Popid, txtID) {
    result = price * qty;
    if (price == 0) return;
    document.getElementById(txtID).innerHTML = "Ordered Successfully! - Total Price: " + result;
    var popup = document.getElementById(Popid);
    popup.classList.toggle("show");
}

function SubmitReview() {
    document.getElementById("YourReview").innerHTML = "Submited Successfully! ";
}
