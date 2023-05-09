create database StatinarySupply

Use  StatinarySupply

CREATE TABLE OrderedProducts (
  orderId INT PRIMARY KEY,productName VARCHAR(255) NOT NULL,
  orderStatus VARCHAR(10) NOT NULL,
  orderDate DATE NOT NULL,
  orderedBy VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  unitPrice DECIMAL(10,2) NOT NULL,
  totalPrice DECIMAL(10,2) NOT NULL
);

INSERT INTO OrderedProducts (orderId, productName, orderStatus,orderDate, orderedBy, quantity, unitPrice, totalPrice)
VALUES (0001, 'Books', 'Pending','2023-04-30', 'Sateesh', 10, 15.99, 159.90),
       (0002, 'Pens','Pending',  '2023-04-30', 'Sateesh', 15, 15.99, 159.90),
        (0003, 'calculator', 'Ordered', '2023-04-30', 'Sateesh', 5, 39.99, 199.95),
        (0004, 'Pins', 'Pending', '2023-04-30', 'Sateesh', 20, 4.99, 9.98),
        (0005, 'Box', 'Ordered','2023-04-30', 'Sateesh', 5, 20, 100),
        (0006, 'Staper','Ordered', '2023-04-30', 'Sateesh', 20, 19.99, 399.8),
        (0007, 'Scotch Tape', 'Ordered','2023-04-30', 'Sateesh', 5, 4.99, 24.95),
        (0008, 'WhiteBoard Markers', 'Pending', '2023-04-30', 'Sateesh', 10, 14.99, 149.9);


SELECT * FROM OrderedProducts;

SELECT * FROM OrderedProducts 
WHERE orderStatus = 'Pending';

SELECT * FROM OrderedProducts 
WHERE orderStatus = 'Ordered';