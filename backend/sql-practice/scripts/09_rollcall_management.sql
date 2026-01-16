-- ============================================================================
-- Database: Roll Call Management System
-- Description: Track attendance with old and new roll call records
-- ============================================================================

CREATE DATABASE RollCall;
USE RollCall;

CREATE TABLE O_RollCall (
    roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    date DATE
);

CREATE TABLE N_RollCall (
    roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    date DATE
);

INSERT INTO O_RollCall (roll_no, name, date) 
VALUES 
(1, 'Aadi', '2024-01-01'),
(2, 'Lavy', '2024-01-02'),
(3, 'Vishnu', '2024-01-03'),
(5, 'Dk', '2024-01-04'),
(6, 'Aadi', '2024-01-05');

SELECT * FROM O_RollCall;
DROP TABLE O_RollCall;

INSERT INTO N_RollCall (roll_no, name, date) 
VALUES 
(3, 'Vishnu', '2024-01-01'),
(4, 'Aadi', '2024-01-06'),
(7, 'Lavy', '2024-01-07'),
(8, 'Dk', '2024-01-08');

SELECT * FROM N_RollCall;
DROP TABLE N_RollCall;

-- Call the procedure to merge data
CALL MergeRollCall();

-- View the merged O_RollCall table
SELECT * FROM O_RollCall;