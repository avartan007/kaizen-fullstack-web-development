# SQL Practice Repository

A comprehensive collection of SQL practice scripts covering various database concepts and real-world scenarios. All files are organized sequentially by difficulty level and topic.

## 📁 Repository Structure

```
sql-practice/
├── scripts/                          # All SQL files organized sequentially
│   ├── 01_college_basic_operations.sql
│   ├── 02_college_student_grades.sql
│   ├── 03_sample_users.sql
│   ├── 04_company_management.sql
│   ├── 05_sales_management.sql
│   ├── 06_sales_advanced_queries.sql
│   ├── 07_library_management.sql
│   ├── 08_student_reports.sql
│   ├── 09_rollcall_management.sql
│   ├── 10_library_audit.sql
│   ├── 11_employee_basic.sql
│   └── 12_rollcall_attendance.sql
├── docs/                            # Documentation (future use)
├── README.md                        # This file
├── LICENSE                          # MIT License
├── CONTRIBUTING.md                  # Contribution guidelines
└── .gitignore                       # Git ignore rules
```

## 📚 SQL Scripts Overview

### Beginner Level (Scripts 01-03)

#### 01_college_basic_operations.sql
- **Concepts**: CREATE TABLE, INSERT, DROP, SELECT
- **Tables**: student, student1, Employee, temp1, emp
- **Features**: Basic CRUD operations, table manipulation
- **Size**: ~1.4 KB | Duration: 5-10 min

#### 02_college_student_grades.sql
- **Concepts**: SELECT with WHERE, DISTINCT, filtering
- **Tables**: student (extended schema)
- **Features**: Performance analysis, grade tracking, city grouping
- **Size**: ~0.7 KB | Duration: 5 min

#### 03_sample_users.sql
- **Concepts**: Table creation, basic schema design
- **Tables**: users
- **Features**: User management foundation, AUTO_INCREMENT, UNIQUE constraint
- **Size**: ~0.4 KB | Duration: 3 min

### Intermediate Level (Scripts 04-08)

#### 04_company_management.sql
- **Concepts**: Relationships, Foreign Keys, Views, Indexes
- **Tables**: Department, Employee, Project, Assignment, Salary, Company
- **Features**: Complex JOINs, database views (EmployeeDetails, ProjectAssignments)
- **Size**: ~2.4 KB | Duration: 15-20 min

#### 05_sales_management.sql
- **Concepts**: Foreign Keys, referential integrity, data validation
- **Tables**: Sales_Representative, Customers, Orders
- **Features**: Sales tracking, company relationships, order management
- **Size**: ~2.0 KB | Duration: 10-15 min

#### 06_sales_advanced_queries.sql
- **Concepts**: Complex JOINs, GROUP BY, HAVING, subqueries, aggregation
- **Tables**: Sales_Representative, Customers, Orders
- **Features**: 10 advanced analytical queries, multi-table joins
- **Size**: ~4.7 KB | Duration: 20-30 min

#### 07_library_management.sql
- **Concepts**: Stored procedures, conditional logic, DELIMITER, date functions
- **Tables**: Borrower, Fine, TemporaryInput
- **Features**: Fine calculation procedures, status management, date-based logic
- **Size**: ~3.3 KB | Duration: 20 min

#### 08_student_reports.sql
- **Concepts**: Stored procedures, category classification
- **Tables**: Students
- **Features**: Marks tracking, automatic categorization
- **Size**: ~0.9 KB | Duration: 10 min

### Advanced Level (Scripts 09-12)

#### 09_rollcall_management.sql
- **Concepts**: Procedure calls, data merging, set operations
- **Tables**: O_RollCall (Old), N_RollCall (New)
- **Features**: Attendance record merging, data comparison
- **Size**: ~1.1 KB | Duration: 10-15 min

#### 10_library_audit.sql
- **Concepts**: Audit trails, triggers, TIMESTAMP, DML tracking
- **Tables**: library, library_audit
- **Features**: Automatic operation logging, audit trail tracking
- **Size**: ~1.3 KB | Duration: 15-20 min

#### 11_employee_basic.sql
- **Concepts**: DROP, INSERT, SELECT, table recreation
- **Tables**: emp
- **Features**: Basic employee operations, error handling
- **Size**: ~0.7 KB | Duration: 5 min

#### 12_rollcall_attendance.sql
- **Concepts**: Procedure calls, database operations, transactions
- **Tables**: N_RollCall, O_RollCall
- **Features**: Attendance management, data merging operations
- **Size**: ~0.9 KB | Duration: 10 min

## 👥 Standard Test Data

All examples use consistent test data with these individuals:
- **Aadi** - Used across multiple tables
- **Lavy** - Sales and administrative roles
- **Vishnu** - Technical and support roles
- **Dk** - Operations and management roles

## 🚀 Quick Start

### Prerequisites
- MySQL 5.7+ or MariaDB 10.3+
- Command-line MySQL client or GUI tool (MySQL Workbench, DBeaver, etc.)

### Running Scripts

**Option 1: Command Line**
```bash
mysql -u username -p < scripts/01_college_basic_operations.sql
```

**Option 2: Interactive MySQL**
```bash
mysql -u username -p
mysql> source scripts/01_college_basic_operations.sql;
```

**Option 3: GUI Tool**
1. Open script file in MySQL Workbench or DBeaver
2. Execute entire script or individual statements
3. View results in output panel

## 📊 Concepts Covered

### SQL Fundamentals
- `CREATE DATABASE` / `USE` / `DROP DATABASE`
- `CREATE TABLE` / `DROP TABLE`
- `INSERT INTO` / `SELECT` / `UPDATE` / `DELETE`
- Column constraints: PRIMARY KEY, UNIQUE, NOT NULL, CHECK
- Data types: INT, VARCHAR, DATE, DECIMAL

### Intermediate SQL
- `JOIN` operations (INNER, LEFT, CROSS)
- `WHERE` clauses and filtering
- `ORDER BY` and `DISTINCT`
- `INDEX` creation
- `FOREIGN KEY` relationships
- `CREATE VIEW` for query abstraction

### Advanced SQL
- **Stored Procedures**: Parameter handling, control flow (IF/WHILE)
- **Triggers**: Automatic operations on DML events
- **Subqueries**: Nested SELECT statements
- **Aggregation**: GROUP BY, HAVING, aggregate functions
- **Date Functions**: CURDATE(), DATEDIFF(), date calculations
- **Audit Systems**: Timestamp tracking, operation logging
- **Complex Queries**: Multi-table analytics and reporting

## 🎯 Learning Path

### Path 1: Linear Progression
Follow scripts 1-12 sequentially for comprehensive learning

### Path 2: Topic-Based
**Databases & Tables**: 01, 02, 03  
**Relationships**: 04, 05  
**Analytics**: 06  
**Procedures & Automation**: 07, 08, 09, 10  
**Operations**: 11, 12  

### Path 3: Project-Based
**College System**: 01, 02  
**Company System**: 04, 05, 06  
**Library System**: 07, 10  
**Attendance System**: 09, 12  

## ⚠️ Important Notes

1. **Backup First**: Some scripts contain DROP statements
2. **Test Environment**: Use practice databases, not production
3. **Modify & Experiment**: Change queries to reinforce learning
4. **Error Handling**: Some scripts intentionally demonstrate errors
5. **Database Names**: Adjust in scripts if needed for your environment

## 📝 File Naming Convention

Files are named with a three-part pattern:
```
[NUMBER]_[DATABASE_NAME]_[PRIMARY_FUNCTION].sql
└─ 01_college_basic_operations.sql
   ├─ 01: Sequential order for learning progression
   ├─ college: Main domain/database name
   └─ basic_operations: Primary SQL operations demonstrated
```

## 🔧 Customization Tips

1. **Add More Data**: Extend INSERT statements with additional records
2. **Create Queries**: Write SELECT statements to explore data
3. **Modify Tables**: Add or change column definitions
4. **Write Procedures**: Create your own stored procedures
5. **Create Indexes**: Optimize performance with strategic indexes

## 📖 Database Relationships

```
Schema Diagrams:

Company System (04, 05, 06):
  Department ←→ Employee ←→ Project ←→ Assignment
                   ↓            ↓
                Salary      Salary

Library System (07, 10):
  Borrower ←→ Fine
         ↓
   TemporaryInput
   
Attendance System (09, 12):
  O_RollCall ←→ N_RollCall (merging operation)
```

## 🌟 Key Features

✅ **Beginner Friendly**: Start with basics, progress to advanced  
✅ **Real-World Scenarios**: Practical database examples  
✅ **Well-Documented**: Clear headers and inline comments  
✅ **Consistent Data**: Standard names across all files  
✅ **Organized Structure**: Sequential numbering and folders  
✅ **MIT Licensed**: Open source, free to use and modify  

## 📈 Progression Metrics

| Level | Scripts | Topics | Est. Time |
|-------|---------|--------|-----------|
| Beginner | 01-03 | DDL, DML, basic queries | 15 min |
| Intermediate | 04-08 | Joins, views, procedures | 75 min |
| Advanced | 09-12 | Triggers, audit systems | 50 min |
| **Total** | **12** | **20+ concepts** | **2+ hours** |

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Code style guidelines
- How to add new scripts
- Testing procedures
- Pull request process

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## ❓ FAQ

**Q: Can I use these in production?**  
A: These are learning scripts. Adapt them for production use cases.

**Q: What MySQL version is needed?**  
A: MySQL 5.7+ or MariaDB 10.3+. Some features need specific versions.

**Q: How do I modify the test data?**  
A: Edit the INSERT statements with your own names and values.

**Q: Can I create my own scripts?**  
A: Yes! Follow the naming convention and add to the scripts folder.

---

**Created**: January 2024  
**Last Updated**: January 16, 2026  
**Status**: ✅ GitHub Ready | Properly Organized | Production Compatible
