# 🔧 Backend Engineering Stack

Server-side development with Node.js/Express, Java, and SQL/NoSQL databases.

## 🏗️ Architecture Overview

```
  User Request
       ↓
┌─────────────────────────────┐
│  Express.js / Servlets      │  🌐 API Layer
├─────────────────────────────┤
│  Controllers & Middleware   │  ⚙️  Business Logic
├─────────────────────────────┤
│  DAOs & Services            │  🔄 Data Access Layer
├─────────────────────────────┤
│  MongoDB / MySQL / SQL      │  🗄️  Persistence Layer
└─────────────────────────────┘
       ↓
   Database Response
```

## 📁 Core Components

### 🟢 nodejs-ejs/
**Server-Side Rendering with Express.js**

Build dynamic web experiences with server-side templating and real-time data rendering.

**Core Features:**
- 🎛️ **Framework**: Express.js (minimal, unopinionated Node.js web framework)
- 📝 **Templating**: Embedded JavaScript (EJS) for dynamic HTML generation
- 🏛️ **Pattern**: MVC with route handlers & middleware chain
- 📊 **Data**: JSON mock data integration for realistic scenarios

**Includes:**
- Express middleware & routing
- EJS templating & dynamic content
- Request/response handling
- Static asset serving
- Server-side data transformation

**Tech Stack Reference:**
```javascript
{
  runtime: 'Node.js 14+',
  framework: 'Express.js 4.x',
  templating: 'EJS 3.x',
  dataFormat: 'JSON',
  architecture: 'MVC',
  patterns: ['Middleware', 'Route handlers', 'Template engines']
}
```

---

### 🍃 mongodb-crud-operations/
**Java-MongoDB NoSQL Integration**

Master modern document-oriented database design with Java-MongoDB connectivity.

**Core Features:**
- ☕ **Language**: Java (strong typing, OOP principles)
- 🌿 **Database**: MongoDB (flexible document-oriented storage)
- 🏗️ **Pattern**: Data Access Object (DAO) for abstraction
- ✨ **Operations**: Full CRUD (Create, Read, Update, Delete)
- 🔌 **Connectivity**: MongoDB Java Driver

**Includes:**
- MongoDB document structure & collections
- Java Driver usage & connections
- CRUD operations
- Document design
- NoSQL concepts

---

### 🗄️ sql-practice/
**Relational Database Engineering & Advanced SQL**

Learn production SQL across real-world business domains with 12+ comprehensive scripts.

**Included Domains:**
| Domain | Use Cases | Complexity |
|--------|-----------|-----------|
| 👨‍🎓 **Education** | Student grades, academic reporting, course management | Intermediate |
| 💼 **Business** | Company organization, employee hierarchies, departments | Intermediate |
| 💰 **Finance** | Sales pipeline, revenue tracking, transactions | Advanced |
| 📚 **Library** | Book inventory, member management, checkout systems | Intermediate |
| 👥 **HR** | Attendance tracking, employee records, payroll | Intermediate |

**Covers:**
- JOIN operations (INNER, LEFT, RIGHT, FULL, CROSS)
- Subqueries & nested logic
- Aggregate functions (COUNT, SUM, AVG, MIN, MAX)
- GROUP BY & HAVING
- Window functions
- Query optimization & indexing
- Database design principles
- Transactions & ACID properties

## 🎯 Topics Covered

**🌐 Server Architecture**
- Express.js routing & middleware chains
- MVC pattern implementation & separation of concerns
- Template engine integration (EJS)
- REST API design & best practices
- Static asset serving & caching strategies
- Error handling & logging patterns

**🗄️ Database Engineering**
- Relational database design & normalization
- Complex query optimization techniques
- Index strategies for performance
- Transaction management & ACID properties
- MongoDB document design & aggregation pipelines
- NoSQL vs relational trade-off analysis

**🔄 Data Integration**
- REST API principles & HTTP methods
- JSON data serialization & deserialization
- Request/response cycle & middleware
- Data validation & error responses
- Database connectivity & connection pooling
- ORM patterns & data access layers

---

## 🚀 Getting Started

### Run Node.js/Express Example
```bash
cd nodejs-ejs
npm install
npm start
# Visit http://localhost:3000
```

### Run Java-MongoDB Example
```bash
cd mongodb-crud-operations
# Ensure MongoDB is running
javac *.java
java MongoDBApp
```

### Explore SQL Scripts
```bash
cd sql-practice/scripts
# Import any SQL file into MySQL
mysql -u root -p < 01_college_basic_operations.sql
```

---

*Backend architecture and database implementations.*
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
