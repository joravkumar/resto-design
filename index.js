const menu = [{
    name: 'Hot Dog',
    price: 50
}, {
    name: "Sandwich",
    price: 40
}, {
    name: 'Black Forest Cake',
    price: 500
}, {
    name: 'Red Velvet',
    price: 600
}, {
    name: 'Coca Cola',
    price: 50
}, {
    name: 'Rainbow Cake',
    price: 1300
}];


let purchasedItems = [];

const menuContainer = document.querySelector('.menu');
const itemContainer = document.querySelector('.items-container');

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = menu.map(item => {
        return `<div class="card" onclick="addToCart('${item.name}', '${item.price}')">
                    <h3>${item.name}</h3>
                    <h5>${item.price}</h5>
                </div>`;
    });
    menuContainer.innerHTML = cardContainer.join("");
});

function addToCart(itemName, price) {
    const isItemExist = purchasedItems.findIndex(item=> item.name === itemName);
if (isItemExist === -1) {
    purchasedItems.push({
        quantity: 1,
        name: itemName,
        price: price
    })
} else {
    purchasedItems = purchasedItems.map(item => {
        if (item.name === itemName) {
            item.quantity++
            return item;
        }
        return item;
    });
}
    printPurchasedItems();
   
}


function printPurchasedItems() {
    const listItems = purchasedItems.map(item => {
        return `<div class="list">
        <div class="left">
          <span class="quan">${item.quantity}x</span>
          <span class="name">${item.name}</span>
        </div>
        <div class="right">
          <span class="price">&#8377; ${item.quantity * item.price}</span>
        </div>
      </div>`;
    })

    itemContainer.innerHTML = listItems.join("") 
}
