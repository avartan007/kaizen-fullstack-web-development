# 🔧 Backend Engineering Stack

Production-grade backend architecture demonstrating server-side development, database engineering, and API design patterns.

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────┐
│   API Layer (Express.js / Servlets)    │
├─────────────────────────────────────────┤
│   Business Logic & Data Access         │
├─────────────────────────────────────────┤
│   Database Layer (MySQL / MongoDB)     │
└─────────────────────────────────────────┘
```

## 📁 Core Components

### nodejs-ejs/
**Server-Side Rendering with Express.js**

Advanced templating and real-time data rendering
- **Framework**: Express.js (Node.js web framework)
- **Templating Engine**: Embedded JavaScript (EJS)
- **Architecture Pattern**: MVC with route handlers
- **Features**: 
  - Server-side template compilation
  - Static asset serving
  - Dynamic route handling
  - Mock data integration (JSON)

**Tech Stack:**
```javascript
const server = {
  runtime: 'Node.js',
  framework: 'Express.js',
  templating: 'EJS',
  dataFormat: 'JSON',
  capabilities: ['SSR', 'REST endpoints', 'middleware']
}
```

### mongodb-crud-operations/
**Java-MongoDB NoSQL Operations**

Full CRUD implementation with MongoDB database integration
- **Language**: Java
- **Database**: MongoDB (Document-Oriented)
- **Pattern**: Data Access Object (DAO)
- **Operations**: Create, Read, Update, Delete
- **Connectivity**: MongoDB Java Driver

**Key Operations:**
- Insert documents to collections
- Query and retrieve document sets
- Update existing records
- Delete operations with filters
- Collection and database management

### database-fundamentals/
**Relational Database Engineering**

12+ production-ready SQL scripts demonstrating advanced query patterns
- **DBMS**: MySQL / SQL Standard
- **Complexity**: Basic to Advanced SQL
- **Domains Covered**: Finance, Education, HR, Retail

**Included Scenarios:**
1. College Management System
2. Student Grades & Academic Reporting
3. User Account Systems
4. Company Organization Structure
5. Sales Pipeline Management
6. Advanced Sales Analytics
7. Library Management
8. Student Academic Reports
9. Attendance & Rollcall Tracking
10. Library Audit Logs
11. Employee Hierarchy
12. Attendance Reporting

## 🎯 Technical Competencies

✅ **Server Architecture**
- Express.js routing and middleware
- Template engine integration
- MVC pattern implementation
- Static asset serving

✅ **Database Engineering**
- SQL query optimization
- Complex JOIN operations
- Aggregate functions (GROUP BY, HAVING)
- Index design for performance
- MongoDB document structure design
- NoSQL CRUD patterns

✅ **Data Integration**
- REST API principles
- JSON data format
- Request/response handling
- Error management

## 🚀 Quick Start Guide

### Express.js + EJS Server
```bash
cd nodejs-ejs
npm install
node index.js
# Visit http://localhost:8080
```

### MongoDB Operations
```bash
cd mongodb-crud-operations
# Ensure MongoDB is running on localhost:27017
mvn clean install
java -cp target/classes MongoDB.MongoDBApp
```

### SQL Database Practice
```bash
cd database-fundamentals/scripts
# Import .sql files into your MySQL client
mysql -u root -p < 01_college_basic_operations.sql
```

## 📊 Technologies & Patterns

| Technology | Pattern | Use Case |
|-----------|---------|----------|
| Express.js | MVC with SSR | Server-rendered web applications |
| MongoDB | Document DB | Flexible schema, rapid iteration |
| MySQL | Relational DB | Structured data, ACID compliance |
| EJS | Template Engine | Dynamic HTML generation |

## 📈 Database Design Mastery

**Demonstrated Patterns:**
- Normalized schema design
- Foreign key relationships
- Query performance optimization
- Aggregate functions and analytics
- Transaction management (SQL)
- Document embedding vs referencing (MongoDB)

---

*Enterprise backend implementations with production-ready patterns and best practices.*
