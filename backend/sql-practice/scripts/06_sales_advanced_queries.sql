-- ============================================================================
-- Database: Sales Company System
-- Description: Sales representatives, customers, and orders with complex queries
-- ============================================================================

CREATE DATABASE Company;
USE Company;

CREATE TABLE Sales_Representative
(
    Rep_no INT PRIMARY KEY,
    Name VARCHAR(100),
    Re_office VARCHAR(100),
    Quota DECIMAL(10, 2),
    sales INT
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
    Discount DECIMAL(10, 2),
    FOREIGN KEY (cust) REFERENCES Customers(Company)
);

INSERT INTO Sales_Representative
    (Rep_no, Name, Re_office, Quota, sales)
VALUES
    (1, 'Aadi', 'Section A', 100.00, 8500),
    (2, 'Lavy', 'Section B', 120.00, 10500),
    (3, 'Vishnu', 'Section C', 90.00, 9000),
    (4, 'Dk', 'Section B', 125.00, 7000),
    (5, 'Jai', 'Section A', 90.00, 7500);

INSERT INTO Customers
    (Cust_No, Company, Cust_Rep, Credit_Limit)
VALUES
    (1, 'TCS', 1, 100000),
    (2, 'Infosys', 2, 120000),
    (3, 'Wipro', 1, 90000),
    (4, 'Microsoft', 2, 150000),
    (5, 'Google', 3, 200000);

INSERT INTO Orders
    (Order_no, cust, Product, Quantity, Amount, Discount)
VALUES
    (1, 'TCS', 'Software', 10, 300000, 1500),
    (2, 'Infosys', 'Hardware', 5, 25000, 1200),
    (3, 'Wipro', 'Software', 7, 28000, 1400),
    (4, 'Microsoft', 'Consulting', 8, 35000, 1600),
    (5, 'Google', 'Software', 9, 22000, 1100);

-- 1.List for each customer: customer name, their rep’s name, their rep’s office number.
SELECT Company AS Customer_Name,
    Name AS Reps_Name,
    Re_office AS Reps_Office
FROM Customers
    JOIN Sales_Representative ON Customers.Cust_Rep = Sales_Representative.Rep_no;

-- 2.List orders over $25,000 including the name of the salesperson who took the order and the name of the customer who placed it.
SELECT Order_no, Product, Amount, Company AS Customer, Name AS SalesPerson
FROM Orders
    JOIN Customers ON Orders.cust = Customers.Company
    JOIN Sales_Representative ON Customers.Cust_Rep = Sales_Representative.Rep_no
WHERE Orders.Amount > 25000;

-- 3.Find the products which have been sold to TCS.
SELECT Product
FROM Orders
WHERE cust = 'TCS';

-- 4. Find company which has been offered maximum discount.
SELECT cust, MAX(Discount) AS MaxDiscount
FROM Orders
GROUP BY cust
ORDER BY MaxDiscount DESC
LIMIT 1;

-- 5. Find the sales representatives who work in the same office.
SELECT Name
, Re_office
FROM Sales_Representative
WHERE Re_office IN
(
    SELECT Re_office
FROM Sales_Representative
GROUP BY Re_office
HAVING COUNT(*) > 1
)
ORDER BY Re_office, Name;

-- 6.Find the credit limit of company and the discount it has received
SELECT Company, Credit_Limit, Discount
FROM Customers
    JOIN Orders ON Customers.Company = Orders.cust
WHERE Company = 'Google';

-- 7. List for each customer : customer name, credit limit, rep name serving the customer and rep sales.
SELECT Company AS Customer_Name,
    Credit_Limit AS Credit,
    Name AS Rep_Name,
    Sales AS Rep_Sales
FROM Customers
    JOIN Sales_Representative ON Cust_Rep = Sales_Representative.Rep_no;

-- 8.List all orders showing number and amount, and name and credit limit of customer.
SELECT Order_no, Amount, Company AS Customer_Name, Credit_Limit
FROM Orders
    JOIN Customers ON Orders.cust = Customers.Company;

-- 9. Find the product wise sale amount of products which exceeds $12000.
SELECT Product, SUM(Amount) AS TotalAmount
FROM Orders
GROUP BY Product
HAVING TotalAmount > 12000
;

-- 10. Find the names of amount, names of customers and names of representatives who have been involved in the sale of software.
SELECT
    Amount,
    Company AS Customers,
    Name AS Sales_Representative
FROM Orders
    JOIN Customers ON Orders.cust = Customers.Company
    JOIN Sales_Representative ON Customers.Cust_Rep = Sales_Representative.Rep_no
WHERE Product = 'Software';


-- 11. Find the credit limit of company and the discount it has received
SELECT Company, Credit_Limit, Discount
FROM Customers
    JOIN Orders ON Customers.Company = Orders.cust
WHERE Company = 'Google';

-- 12. Find the sales representatives who work in the same office.
SELECT Name, Re_office
FROM Sales_Representative
WHERE Re_office IN (
    SELECT Re_office
FROM Sales_Representative
GROUP BY Re_office
HAVING COUNT(*) > 1
)
ORDER BY Re_office, Name;
