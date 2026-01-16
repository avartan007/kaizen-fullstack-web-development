-- ============================================================================
-- Database: Roll Call System
-- Description: Attendance tracking with old and new roll call records
-- ============================================================================

CREATE DATABASE RollCall;
USE RollCall;
DROP DATABASE RollCall;

CREATE DATABASE RollCall;
USE RollCall;

CREATE TABLE N_RollCall
(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    date DATE
);

CREATE TABLE O_RollCall
(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    date DATE
);

-- for N_RollCall
INSERT INTO N_RollCall
    (id, name, date)
VALUES
    (1, 'Aadi', '2024-01-01'),
    (2, 'Lavy', '2024-01-02'),
    (3, 'Vishnu', '2024-01-03');

-- for O_RollCall
INSERT INTO O_RollCall
    (id, name, date)
VALUES
    (3, 'Vishnu', '2024-01-01'),
    (4, 'Dk', '2024-01-04');

CALL MergeRollCall
();
SELECT *
FROM N_RollCall;
SELECT *
FROM O_RollCall;

DROP TABLE N_RollCall;


