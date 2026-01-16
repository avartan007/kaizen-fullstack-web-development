-- ============================================================================
-- Database: Library Management System
-- Description: Borrower records, fine calculations, and book management
-- ============================================================================

CREATE DATABASE Library;
USE Library;

CREATE TABLE
IF NOT EXISTS Borrower
(
    Rollin INT PRIMARY KEY,
    Name VARCHAR
(20),
    DateofIssue DATE,
    NameofBook VARCHAR
(40),
    Status CHAR
(1) CHECK
(Status IN
('I', 'R'))
);

CREATE TABLE
IF NOT EXISTS Fine
(
    Roll_no INT,
    Date DATE,
    Amt DECIMAL
(10, 2)
);

CREATE TABLE TemporaryInput
(
    Rollin INT,
    NameofBook VARCHAR(100)
);

INSERT INTO Borrower
    (Rollin, Name, DateofIssue, NameofBook, Status)
VALUES
    (1, 'Aadi', '2024-07-01', 'DBMS', 'I'),
    (2, 'Lavy', '2024-07-01', 'SPM', 'I'),
    (3, 'Vishnu', '2024-06-01', 'TOC', 'R'),
    (4, 'Dk', '2024-07-10', 'SPOS', 'I'),
    (5, 'Jai', '2024-07-01', 'CNS', 'R');

INSERT INTO Fine
    (Roll_no, Date, Amt)
VALUES
    (3, '2024-07-31', 25.00);

SELECT *
FROM Borrower;
SELECT *
FROM Fine;
DROP PROCEDURE IF EXISTS pro_name;

DELIMITER $$

-- Accept roll_no & name of book from user
CREATE PROCEDURE AcceptInput(IN roll_no INT, IN nameofbook VARCHAR
(100))
BEGIN
    INSERT INTO TemporaryInput
        (Rollin, NameofBook)
    VALUES
        (roll_no, nameofbook);
END
$$

-- Calculate fine for days between 15 to 30
CREATE PROCEDURE CalculateFine15To30(IN roll_no INT, IN nameofbook VARCHAR
(100))
BEGIN
    DECLARE v_dateofissue DATE;
DECLARE v_current_date DATE;
DECLARE v_days INT;
DECLARE v_fine DECIMAL
(10, 2);

SET v_current_date
= CURDATE
();
SELECT DateofIssue
INTO v_dateofissue
FROM Borrower
WHERE Rollin = roll_no AND NameofBook = nameofbook;

SET v_days
= DATEDIFF
(v_current_date, v_dateofissue);
IF v_days BETWEEN 15 AND 30 THEN
SET v_fine
= v_days * 5;
        CALL InsertFine
(roll_no, v_fine);
END
IF;
END $$

-- Calculate fine for days greater than 30
CREATE PROCEDURE CalculateFineOver30(IN roll_no INT, IN nameofbook VARCHAR
(100))
BEGIN
    DECLARE v_dateofissue DATE;
DECLARE v_current_date DATE;
DECLARE v_days INT;
DECLARE v_fine DECIMAL
(10, 2);

SET v_current_date
= CURDATE
();
SELECT DateofIssue
INTO v_dateofissue
FROM Borrower
WHERE Rollin = roll_no AND NameofBook = nameofbook;

SET v_days
= DATEDIFF
(v_current_date, v_dateofissue);
IF v_days > 30 THEN
SET v_fine
= v_days * 50;
        CALL InsertFine
(roll_no, v_fine);
END
IF;
END $$

-- Change status from 'I' to 'R' after submitting the book
CREATE PROCEDURE UpdateStatus(IN roll_no INT, IN nameofbook VARCHAR
(100))
BEGIN
    UPDATE Borrower
    SET Status = 'R'
    WHERE Rollin = roll_no AND NameofBook = nameofbook;
END
$$

-- Insert fine details into the Fine table
CREATE PROCEDURE InsertFine(IN roll_no INT, IN fine_amt DECIMAL
(10, 2))
BEGIN
    DECLARE v_current_date DATE;
SET v_current_date
= CURDATE
();
INSERT INTO Fine
    (Roll_no, Date, Amt)
VALUES
    (roll_no, v_current_date, fine_amt);
END $$

DELIMITER ;

-- Call procedures
CALL AcceptInput
(4, 'SPOS');
CALL CalculateFine15To30
(4, 'SPOS');
CALL CalculateFineOver30
(4, 'SPOS');
CALL UpdateStatus
(4, 'SPOS');

-- Display updated Borrower and Fine tables
SELECT *
FROM Borrower;
SELECT *
FROM Fine;
