const itemList = ["pen", "pencil", "eraser", "scale", "book"];

function displayItemList() {
  const itemListElement = document.getElementById("item-list");
  if (itemList.length === 0) {
    itemListElement.innerHTML = "<li>No items available</li>";
  } else {
    itemListElement.innerHTML = "";
    for (let i = 0; i < itemList.length; i++) {
      const item = itemList[i];
      itemListElement.innerHTML += `<li>${item}</li>`;
    }
  }
}

displayItemList();
