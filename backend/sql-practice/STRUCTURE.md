# Project Structure & Organization Guide

## Directory Layout

```
sql-practice/
│
├── scripts/                              # All SQL scripts organized sequentially
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
│   ├── 12_rollcall_attendance.sql
│   └── 3.db                             # Sample database file
│
├── docs/                                # Documentation folder (for future)
│   └── (empty - ready for additional documentation)
│
├── README.md                            # Main documentation
├── LICENSE                              # MIT License
├── CONTRIBUTING.md                      # Contribution guidelines
├── STRUCTURE.md                         # This file
└── .gitignore                          # Git ignore rules
```

## File Organization System

### Naming Convention

All SQL files follow a **three-component naming pattern**:

```
[SEQUENCE]_[DOMAIN]_[OPERATION].sql

Components:
├─ SEQUENCE (01-99)    → Learning order/difficulty progression
├─ DOMAIN             → Database/business domain (college, company, library, etc.)
└─ OPERATION          → Primary SQL operations/features demonstrated
```

### Examples

| File | Sequence | Domain | Operation | Purpose |
|------|----------|--------|-----------|---------|
| `01_college_basic_operations.sql` | 01 | college | basic_operations | CRUD fundamentals |
| `04_company_management.sql` | 04 | company | management | Complex relationships |
| `06_sales_advanced_queries.sql` | 06 | sales | advanced_queries | Analytical queries |
| `07_library_management.sql` | 07 | library | management | Stored procedures |

## Scripts Grouped by Difficulty & Domain

### By Difficulty Level

**Beginner** (01-03): ~15 minutes
- Basic table creation
- Simple INSERT/SELECT
- DROP operations

**Intermediate** (04-08): ~75 minutes
- Foreign keys & relationships
- Views & indexes
- Stored procedures basics

**Advanced** (09-12): ~50 minutes
- Complex procedures
- Triggers & audit trails
- Advanced aggregation

### By Domain/Business Context

**College System** (01, 02)
- Student information
- Grade tracking
- Basic operations

**Company System** (04, 05, 06)
- Departments & employees
- Projects & assignments
- Sales & customers
- Advanced analytics

**Library System** (07, 10)
- Book borrowing
- Fine calculations
- Audit trails

**Attendance System** (09, 12)
- Roll call records
- Attendance tracking
- Data merging

## File Contents Structure

Each SQL file follows this standard structure:

```sql
-- ============================================================================
-- Database: [Name]
-- Description: [What this script teaches]
-- ============================================================================
[BLANK LINE]

-- Step 1: Database Setup
CREATE DATABASE [name];
USE [name];
[BLANK LINE]

-- Step 2: Table Definitions
CREATE TABLE [table1] (
    column1 TYPE constraints,
    column2 TYPE constraints
);

CREATE TABLE [table2] (
    column1 TYPE constraints,
    FOREIGN KEY (column1) REFERENCES [table1](column1)
);
[BLANK LINE]

-- Step 3: Data Population
INSERT INTO [table1] (columns)
VALUES (values);
[BLANK LINE]

-- Step 4: Queries & Operations
SELECT * FROM [table1];
UPDATE [table1] SET column = value;
[BLANK LINE]

-- Step 5: Cleanup (if applicable)
DROP TABLE [table_name];
```

## Folder Functions

### `/scripts`
**Purpose**: Core SQL practice files  
**Contents**: 12 organized SQL files (01-12)  
**Usage**: Execute these files to learn SQL  
**Naming**: Sequential with descriptive names  

### `/docs`
**Purpose**: Additional documentation  
**Current**: Empty (ready for expansion)  
**Future**: Could contain:
- Database schemas (PNG/PDF)
- Query explanations
- Tutorial guides
- Quick reference cards

### Root Level

| File | Purpose |
|------|---------|
| `README.md` | Main documentation & quick start |
| `LICENSE` | MIT License (open source) |
| `CONTRIBUTING.md` | Guidelines for contributors |
| `STRUCTURE.md` | This organization guide |
| `.gitignore` | Exclude files from version control |

## Learning Progression

### Recommended Order

**Week 1: Fundamentals (Scripts 01-03)**
- Day 1-2: Script 01 - Basic operations
- Day 3: Script 02 - Queries & filtering
- Day 4-5: Script 03 - User management

**Week 2: Intermediate (Scripts 04-08)**
- Day 1-2: Script 04 - Complex relationships
- Day 3: Script 05 - Sales system
- Day 4-5: Script 06 - Advanced queries
- Day 6: Script 07 - Stored procedures
- Day 7: Script 08 - Category classification

**Week 3: Advanced (Scripts 09-12)**
- Day 1-2: Script 09 - Data merging
- Day 3-4: Script 10 - Audit systems
- Day 5: Script 11 - Basic operations
- Day 6-7: Script 12 - Attendance tracking

## File Sizes & Execution Times

| Script | Size | Exec Time | Complexity |
|--------|------|-----------|-----------|
| 01 | 1.4 KB | 5-10 min | ⭐ |
| 02 | 0.7 KB | 5 min | ⭐ |
| 03 | 0.4 KB | 3 min | ⭐ |
| 04 | 2.4 KB | 15-20 min | ⭐⭐ |
| 05 | 2.0 KB | 10-15 min | ⭐⭐ |
| 06 | 4.7 KB | 20-30 min | ⭐⭐⭐ |
| 07 | 3.3 KB | 20 min | ⭐⭐⭐ |
| 08 | 0.9 KB | 10 min | ⭐⭐ |
| 09 | 1.1 KB | 10-15 min | ⭐⭐⭐ |
| 10 | 1.3 KB | 15-20 min | ⭐⭐⭐ |
| 11 | 0.7 KB | 5 min | ⭐⭐ |
| 12 | 0.9 KB | 10 min | ⭐⭐⭐ |

## How to Navigate

### For Beginners
1. Start with `/scripts/01_*.sql`
2. Read the header comments
3. Execute line by line
4. Modify and experiment
5. Progress to next script

### For Intermediate Users
1. Choose a domain (College, Company, Library, etc.)
2. Follow related scripts sequentially
3. Study the relationships between tables
4. Write your own queries

### For Advanced Users
1. Jump to scripts 06+ for complex patterns
2. Study stored procedures and triggers
3. Analyze multi-table queries
4. Implement your own features

## Tips for Organization

### Adding New Scripts
```
New File Template:
[NEXT_NUMBER]_[domain]_[operation].sql

Example: 13_report_system_analytics.sql
```

### Organizing by Category
Future: Could create subfolders if collection grows
```
scripts/
├── beginner/
├── intermediate/
└── advanced/
```

### Backup Strategy
```
scripts/
├── archive/          (old versions)
└── backup/          (before modifications)
```

## GitHub Ready Structure

This organization ensures:
✅ Clear hierarchy  
✅ Easy navigation  
✅ Scalable growth  
✅ Professional presentation  
✅ Community-friendly  
✅ CI/CD compatible  

## Version Control

### .gitignore Exclusions
- `*.db` - Database files
- `*.log` - Log files
- `.vscode/`, `.idea/` - IDE files
- `__pycache__/` - Python cache
- `.env` - Environment variables

### Recommended Git Workflow
```bash
git clone [repo]
cd sql-practice
git checkout -b feature/new-script
# Add new script
git add scripts/13_*.sql
git commit -m "feat: Add new database example"
git push origin feature/new-script
# Create Pull Request
```

## Future Expansion Ideas

When the collection grows:

1. **Category Subfolders**
   ```
   scripts/
   ├── 01-basic/
   ├── 02-intermediate/
   └── 03-advanced/
   ```

2. **Documentation per Script**
   ```
   docs/
   ├── 01_college_basic_operations/
   │   ├── schema.md
   │   ├── queries.md
   │   └── diagram.png
   ```

3. **Test Scripts**
   ```
   tests/
   ├── schema_validation.sql
   └── data_integrity.sql
   ```

4. **Example Outputs**
   ```
   examples/
   └── expected_results/
   ```

---

**Version**: 1.0  
**Last Updated**: January 16, 2026  
**Maintainer**: SQL Practice Community
