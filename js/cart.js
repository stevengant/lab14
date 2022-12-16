/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBodyElement = document.getElementsByTagName('tbody');
  tableBodyElement.innerHTML - '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
let tableBodyElement = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for(let i = 0; i < cart.items.length; i++) {

  // TODO: Create a TR
    let trElem = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteElem = document.createElement('td');
    let tdProdElem = document.createElement('td');
    let tdQtyElem = document.createElement('td');

    deleteElem.innerHTML = `<a id="delete-${i}" class="delete">X</a>`;
    tdProdElem.textContent = cart.items[i].product;
    tdQtyElem.textContent = cart.items[i].quantity;

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
    trElem.appendChild(deleteElem);
    trElem.appendChild(tdProdElem);
    trElem.appendChild(tdQtyElem);
    tableBodyElement[0].appendChild(trElem);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
