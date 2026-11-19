let buttons = document.querySelectorAll(".addbtn");
let list = document.getElementById("buttonlist");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        let item = document.createElement("li");
        item.innerText=button.id;
        list.appendChild(item);
    });
});
let orders = {};
let total = 0;
function addOrder(name,price){
    if(orders[name]){
        orders[name].quantity++;
    }else{
        orders[name]={
            price: price,
            quantity: 1
        };
    }
    showOrders();
}
function showOrders(){
    let list = document.getElementById("orderlist");
    list.innerHTML = "";
    total = 0;
    for (let name in orders){
        let item = orders[name];
        let amount = item.price * item.quantity;
        total += amount;
        let row =document.createElement("p");
        row.innerText = name + " - ₹"+item.price + " * "+ item.quantity + " = ₹" + amount;
        list.appendChild(row)
    }
    document.getElementById("total").innerText="total: ₹" + total;
}
