CREATE TABLE request_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL,
    description TEXT
);
INSERT INTO request_status (status_name, description)
VALUES ('Pending', 'The request is pending and has not been processed yet.'),
       ('Processing', 'The request is currently being processed.'),
       ('Ready for Pickup', 'The requested item is ready for pickup at the designated cabinet.'),
       ('Completed', 'The request has been completed and the item has been picked up.'),
       ('Cancelled', 'The request has been cancelled.');

CREATE TABLE pickup_cabinets (
     id INT AUTO_INCREMENT PRIMARY KEY,
     cabinet_name VARCHAR(50) NOT NULL,
     location VARCHAR(255) NOT NULL
);


INSERT INTO pickup_cabinets (cabinet_name, location)
VALUES ('Cabinet A', '1st Floor, Building A'),
       ('Cabinet B', '2nd Floor, Building A'),
       ('Cabinet C', '1st Floor, Building B');


CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    request_date DATETIME NOT NULL,
    status_id INT NOT NULL,
    cabinet_id INT,
    FOREIGN KEY (status_id) REFERENCES request_status (id),
    FOREIGN KEY (cabinet_id) REFERENCES pickup_cabinets (id)
);

