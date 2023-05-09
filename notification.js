const unavailableItems = ['Pen', 'Eraser']; 


function isAvailable(item) {
  return !unavailableItems.includes(item);
}


function showMessage(item) {
  const messageContainer = document.getElementById('message');
  

  const messageText = isAvailable(item) ? `${item} has been added to your cart.` : `${item} is currently unavailable.`;
  const messageIcon = isAvailable(item) ? '✔️' : '❌';
  

  messageContainer.innerHTML = `${messageIcon} ${messageText}`;
}

const cartList = document.getElementById('cart');
cartList.addEventListener('click', (event) => {
  const item = event.target.innerText;
  
  showMessage(item);
});
