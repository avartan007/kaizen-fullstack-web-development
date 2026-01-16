-- ============================================================================
-- Database: Sales Management System
-- Description: Sales representatives, customers, and orders management
-- ============================================================================

CREATE DATABASE Company;
USE Company;

CREATE TABLE Sales_Representative
(
    Rep_no INT PRIMARY KEY,
    Name VARCHAR(100),
    Re_office VARCHAR(100),
    Quota DECIMAL(10, 2),
    sales DECIMAL(10, 2)
);

CREATE TABLE Customers
(
    Cust_No INT PRIMARY KEY,
    Company VARCHAR(50),
    Cust_Rep INT NOT NULL,
    Credit_Limit DECIMAL(10, 2),
    INDEX idx_company (Company),
    FOREIGN KEY (Cust_Rep) REFERENCES Sales_Representative(Rep_no)
);

CREATE TABLE Orders
(
    Order_no INT PRIMARY KEY,
    cust VARCHAR(50),
    Product VARCHAR(50),
    Quantity INT NOT NULL,
    Amount DECIMAL(10, 2),
    Discount DECIMAL(5, 2),
    FOREIGN KEY (cust) REFERENCES Customers(Company)
);

INSERT INTO Sales_Representative
    (Rep_no, Name, Re_office, Quota, sales)
VALUES
    (1, 'Aadi', 'Section A', 100.00, 8500.50),
    (2, 'Lavy', 'Section B', 120.00, 10500.75),
    (3, 'Vishnu', 'Section C', 90.00, 9000.00),
    (4, 'Dk', 'Section D', 125.00, 7000.00),
    (5, 'Jai', 'Section E', 90000.00, 75000.25);

INSERT INTO Customers
    (Cust_No, Company, Cust_Rep, Credit_Limit)
VALUES
    (1, 'TCS', 1, 100000.00),
    (2, 'Infosys', 2, 120000.00),
    (3, 'Wipro', 1, 90000.00),
    (4, 'Microsoft', 2, 150000.00),
    (5, 'Google', 3, 200000.00);

INSERT INTO Orders
    (Order_no, cust, Product, Quantity, Amount, Discount)
VALUES
    (1, 'TCS', 'Software', 10, 300000.00, 1500.00),
    (2, 'Infosys', 'Hardware', 5, 25000.00, 1200.00),
    (3, 'Wipro', 'Software', 7, 28000.00, 1400.00),
    (4, 'Microsoft', 'Consulting', 8, 35000.00, 1600.00),
    (5, 'Google', 'Software', 9, 22000.00, 1100.00);

SELECT *
FROM Sales_Representative;
SELECT *
FROM Customers;
SELECT *
FROM Orders;

