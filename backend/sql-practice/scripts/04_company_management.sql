-- ============================================================================
-- Database: Company Management System
-- Description: Complex schema with employees, departments, projects, and assignments
-- ============================================================================

CREATE DATABASE Lavy_company;

USE Lavy_company;

CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL,
    Location VARCHAR(100)
);

CREATE TABLE Employee (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    DOB DATE,
    HireDate DATE,
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE Project (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(100) NOT NULL,
    StartDate DATE,
    EndDate DATE
);

CREATE TABLE Assignment (
    AssignmentID INT PRIMARY KEY,
    EmployeeID INT,
    ProjectID INT,
    Role VARCHAR(100),
    HoursWorked DECIMAL(5,2),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

CREATE TABLE Salary (
    SalaryID INT PRIMARY KEY,
    EmployeeID INT,
    SalaryAmount DECIMAL(10,2) NOT NULL,
    EffectiveDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

CREATE TABLE Company (
    CompanyID INT PRIMARY KEY,
    CompanyName VARCHAR(100) NOT NULL,
    CEOID INT,
    FoundedDate DATE,
    Headquarters VARCHAR(100),
    FOREIGN KEY (CEOID) REFERENCES Employee(EmployeeID)
);

CREATE VIEW EmployeeDetails AS
SELECT 
    Employee.EmployeeID,
    Employee.FirstName,
    Employee.LastName,
    Employee.DOB,
    Employee.HireDate,
    Department.DepartmentName
FROM 
    Employee, Department
WHERE 
    Employee.DepartmentID = Department.DepartmentID
AND
    Employee.HireDate > '2020-01-01';

CREATE VIEW ProjectAssignments AS
SELECT 
    Project.ProjectName,
    Assignment.Role,
    Assignment.HoursWorked,
    Employee.FirstName,
    Employee.LastName
FROM 
    Assignment, Project, Employee
WHERE 
    Assignment.ProjectID = Project.ProjectID
AND 
    Assignment.EmployeeID = Employee.EmployeeID
AND
    Assignment.HoursWorked > 20;

CREATE INDEX EmployeeIdIndex ON Employee (DepartmentID ASC, EmployeeID ASC);

CREATE TABLE empsequence(
id INT,
name CHAR(20)
);

