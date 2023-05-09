
const supplies = [
    { name: "pen", status: "available" },
    { name: "pencil", status: "available" },
    { name: "scale", status: "out of stock" },
    { name: "rubber", status: "back-ordered" },
    { name: "books", status: "discontinued" }
  ];
  
   const criteria = {
    available: { 
      quantity: 10, 
      message: "Available in stock" 
    },
    outOfStock: { 
      quantity: 0, 
      message: "Out of stock" 
    },
    backOrdered: { 
      quantity: 0, 
      message: "Back-ordered" 
    },
    discontinued: { 
      quantity: 0, 
      message: "Discontinued" 
    }
  };
  
  supplies.forEach(supply => {
    const status = getStatus(supply.status);
    console.log(`${supply.name}: ${status.message}`);
  });
  
  function getStatus(status) {
      const criteriaKey = status.replace(/-/g, "").toLowerCase();
    const { quantity, message } = criteria[criteriaKey];
    
      if (quantity > 0) {
      return { status: "available", message };
    } else {
      return { status: criteriaKey, message };
    }
  }
  