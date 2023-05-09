CREATE TABLE Order (
    Order_ID INT PRIMARY KEY,
    Item_Name VARCHAR(50),
    Pickup_Date DATE,
    Cabinet_ID INT,
    Location_ID INT,
    FOREIGN KEY (Cabinet_ID) REFERENCES Pickup_Cabinet(Cabinet_ID),
    FOREIGN KEY (Location_ID) REFERENCES Location(Location_ID)
);