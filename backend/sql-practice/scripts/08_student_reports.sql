-- ============================================================================
-- Database: Student Report System
-- Description: Student marks and category classification
-- ============================================================================

CREATE DATABASE StudentReport;
USE StudentReport;
DROP DATABASE StudentReport;

CREATE TABLE Students
(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    marks INT,
    category VARCHAR(20)
);
DROP TABLE Students;

INSERT INTO Students
    (id, name, marks, category)
VALUES
    (1, 'Aadi', '0', ' '),
    (2, 'Lavy', '0', ' '),
    (3, 'Vishnu', '0', ' '),
    (4, 'Dk', '0', ' '),
    (5, 'Jai', '0', ' ');

SHOW PROCEDURE STATUS WHERE Db = 'studentreport';

SELECT *
FROM Students;

CALL StudentCategory
(1, 1500);
CALL StudentCategory
(2, 990);
CALL StudentCategory
(3, 980);
CALL StudentCategory
(4, 830);
CALL StudentCategory
(5, 870);

SELECT *
FROM Students;


