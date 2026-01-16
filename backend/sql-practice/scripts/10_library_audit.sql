-- ============================================================================
-- Database: Library Audit System
-- Description: Book management with audit trail tracking
-- ============================================================================

CREATE DATABASE Library_Table;
USE Library_Table;
DROP DATABASE Library_Table;

CREATE TABLE library
(
    book_no INT,
    book_name VARCHAR(40),
    author VARCHAR(20),
    allowed_days INT
);

CREATE TABLE library_audit
(
    audit_id INT
    AUTO_INCREMENT PRIMARY KEY,
    book_no INT,
    book_name VARCHAR
    (40),
    author VARCHAR
    (20),
    allowed_days INT,
    operation_type VARCHAR
    (10),
    operation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

    INSERT INTO library
        (book_no, book_name, author, allowed_days)
    VALUES
        (1, 'Database Systems', 'Aadi', 10),
        (2, 'System Programming', 'Lavy', 20),
        (3, 'Computer Network & Internet', 'Vishnu', 18),
        (4, 'Agile Project Management', 'Dk', 24),
        (5, 'Python for Data Analysis', 'Jai', 12);

    select *
    from library;

    -- Update records
    UPDATE library SET allowed_days = 15 WHERE book_no = 1;
    UPDATE library SET allowed_days = 25 WHERE book_no = 2;

    -- Delete records
    DELETE FROM library WHERE book_no = 3;
    DELETE FROM library WHERE book_no = 4;

    SELECT *
    FROM library;

    SELECT *
    FROM library_audit;

    SET SQL_SAFE_UPDATES
    = 0;

