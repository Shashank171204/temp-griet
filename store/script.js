const products=[
    {id:1,name:"Product 1",price:2.99},
    {id:2,name:"Product 2",price:9.99},
    {id:3,name:"Product 3",price:8.99},
];
let str="";
let cart={};
const test={apple:1,orange:2};
const addtoCart=(id)=>{
    cart[id]=1;
    showCart();
};
const decrement = (id) => {
    cart[id] = cart[id] - 1;
    cart[id] < 1 && delete cart[id];
    console.log(cart);
    showCart();
};
const increment = (id) => {
    cart[id] = cart[id] + 1;
    showCart();
};
const showCart=()=>{
    str="";
    // for(let key in cart){
    //     str+=`Product ${key} - $${products.find(p=>p.id==key).price}<br>`;
    // }
    products.map((value)=>{
        if(cart[value.id]){
            str+=`<div>${value.id}-${value.name}-${value.price}&nbsp;&nbsp;<button onclick='decrement(${
            value.id})'>-</button>${cart[value.id]}<button onclick='increment(${value.id})'>+</button>
            &nbsp;&nbsp;${value.price*cart[value.id]}</div>`;
        }
    })
    divCart.innerHTML=str;
    showTotal();
};
const showTotal = () => {
    let total = products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ? cart[value.id] : 0);
    }, 0);
    divTotal.innerHTML = `Order Value: $${total}`;
};
const showProducts=()=>{
    products.map((a)=>{
        str+=`<table align="center"><tr><td>${a.id}</td><td>${a.name}</td><td>${a.price}</td>
        <td><button onclick="addtoCart(${a.id})">Add</button></td></tr></table>`
    });
    divProducts.innerHTML=str;
};