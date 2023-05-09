
const inventory = {
    pen: 10,
    pencil: 15,
    eraser: 5,
    scale: 8,
    books: 20,
  };
  

  function checkInventory(item) {
    if (inventory[item]) {
      console.log(`We have ${inventory[item]} ${item}(s) in stock.`);
    } else {
      console.log(`We don't have ${item} in stock.`);
    }
  }
  
 
  function updateInventory(item, count) {
    if (inventory[item]) {
      inventory[item] += count;
    } else {
      inventory[item] = count;
    }
    console.log(`${count} ${item}(s) have been added to inventory.`);
  }
  
  
  function removeInventory(item, count) {
    if (inventory[item]) {
      inventory[item] -= count;
      console.log(`${count} ${item}(s) have been removed from inventory.`);
    } else {
      console.log(`${item} is not in stock.`);
    }
  }
  
  checkInventory('pen'); 
  updateInventory('pen', 5); 
  removeInventory('books', 10);
  