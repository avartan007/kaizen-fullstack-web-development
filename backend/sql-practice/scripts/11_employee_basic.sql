-- ============================================================================
-- Database: Employee Management
-- Description: Employee records and basic operations
-- ============================================================================

CREATE TABLE emp
(
    empid INTEGER NOT NULL,
    empname TEXT NOT NULL,
    email TEXT NOT NULL
);

INSERT INTO emp
    (empid, empname, email)
VALUES
    (1, 'Aadi', 'test@gmail.com');

DROP TABLE IF EXISTS emp;

-- Insert a row into the emp table with a unique empid
CREATE TABLE emp
(
    empid INTEGER NOT NULL,
    empname TEXT NOT NULL,
    email TEXT NOT NULL
);

INSERT INTO emp
    (empid, empname, email)
VALUES
    (2, 'Lavy', 'lavy@example.com');

DROP TABLE emp;
