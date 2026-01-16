-- ============================================================================
-- Database: College Management System (Extended)
-- Description: Student records with grades and performance tracking
-- ============================================================================

CREATE DATABASE college;
USE college;

CREATE TABLE student
(
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO student
    (rollno, name, marks, grade, city)
VALUES
    (101, "Aadi", 76, "C", "DELHI"),
    (102, "Lavy", 57, "A", "PUNE"),
    (103, "Vishnu", 54, "S", "BOMBAY"),
    (104, "Dk", 34, "E", "PUNE"),
    (105, "Jai", 67, "B", "DELHI");

SELECT DISTINCT city
FROM student;
