-- ============================================================================
-- Database: College Management System
-- Description: Basic SQL examples for student and employee management
-- ============================================================================

CREATE DATABASE college;

USE college;

create table student(
 id INT PRIMARY KEY,
 name VARCHAR(50),
 age INT NOT NULL
);

INSERT INTO student VALUES(1, "Aadi", 20);
INSERT INTO student VALUES(2,"Lavy", 18);

CREATE TABLE student(
  rollno INT PRIMARY KEY,
  name VARCHAR(50)
);

SELECT * FROM student;

DROP TABLE student;

CREATE TABLE student1(
  rollno INT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO student1
(rollno, name)
VALUES
(101, "Aadi"),
(102, "Lavy"),
(103, "Vishnu");

SELECT * FROM student1;

INSERT INTO student1
(rollno, name)
VALUES
(104, "Dk");

CREATE DATABASE xyz_company;

USE xyz_company;

CREATE TABLE Employee(
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT
);
 

INSERT INTO Employee
(id, name, salary)
VALUES
(1,"Aadi",25000),
(2,"Lavy", 30000),
(3,"Vishnu", 40000);

SELECT * FROM Employee;

CREATE TABLE temp1(
ID INT,
name VARCHAR(50),
age INT,
city VARCHAR(20),
PRIMARY KEY (ID, name)
);

INSERT INTO temp1 VALUES(101);
INSERT INTO temp1 VALUES(101);

SELECT * FROM temp1;

DROP TABLE temp1;

CREATE TABLE emp(
id INT,
salary INT DEFAULT 25000
);

INSERT INTO emp (id) VALUES (101);

SELECT * FROM emp;

DROP TABLE student;