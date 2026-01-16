# Student Database Application

A web-based student management system built with Java Servlets and JSP, utilizing MySQL as the database backend.

## Project Overview

This is a web technology assignment project that demonstrates:
- **Backend**: Java Servlets and JSP for dynamic web content
- **Frontend**: HTML/JSP pages for user interface
- **Database**: MySQL for data persistence
- **Architecture**: MVC-style separation with servlets handling business logic

## Features

- ✅ Add new student records
- ✅ View all students in the database
- ✅ MySQL database integration
- ✅ Dynamic web pages using JSP

## Technology Stack

| Technology | Version |
|-----------|---------|
| Java | JDK 8+ |
| MySQL | 5.7+ |
| MySQL Connector/J | cj.jdbc.Driver |
| Apache Tomcat | 8.0+ (or compatible servlet container) |
| JSP/Servlets | Java EE |

## Project Structure

```
StudentDBApp/
├── src/
│   └── com/
│       └── studentapp/
│           ├── DBConnection.java      # Database connection utility
│           └── StudentServlet.java    # Servlet for handling requests
├── WebContent/
│   ├── index.jsp                      # Home page
│   ├── addStudent.jsp                 # Form to add new student
│   ├── viewStudents.jsp               # Display all students
│   └── WEB-INF/
│       └── web.xml                    # Deployment descriptor
├── lib/                               # External libraries
├── README.md                          # This file
└── .gitignore                         # Git ignore file
```

## Prerequisites

Before running this application, ensure you have:

1. **Java Development Kit (JDK)** - Java 8 or later
2. **MySQL Server** - Version 5.7 or later
3. **Tomcat or similar servlet container** - Version 8.0 or later
4. **MySQL Connector/J** - JDBC driver for MySQL

## Setup Instructions

### 1. Database Setup

Create a MySQL database named `studentdb`:

```sql
CREATE DATABASE studentdb;
USE studentdb;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Update Database Credentials

Edit `src/com/studentapp/DBConnection.java` and update the credentials:

```java
return DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/studentdb", 
    "your_username", 
    "your_password"
);
```

### 3. Deploy to Tomcat

1. Copy the project folder to Tomcat's `webapps` directory
2. Restart Tomcat server
3. Access the application at: `http://localhost:8080/StudentDBApp`

### 4. Add MySQL JDBC Driver

Ensure the MySQL Connector/J JAR file is placed in the `lib/` directory or Tomcat's `lib/` folder.

## Usage

1. **Home Page**: Navigate to `index.jsp` to access the main menu
2. **Add Student**: Click "Add New Student" to open the student registration form
3. **View Students**: Click "View Students" to see all registered students

## File Descriptions

| File | Purpose |
|------|---------|
| `DBConnection.java` | Singleton class for managing database connections |
| `StudentServlet.java` | Main servlet handling HTTP requests for student operations |
| `index.jsp` | Landing page with navigation links |
| `addStudent.jsp` | Form page for adding new students |
| `viewStudents.jsp` | Display page showing all students |
| `web.xml` | Application configuration and routing |

## Known Issues & Limitations

- Database credentials are hardcoded (⚠️ **Should use environment variables in production**)
- No input validation or sanitization (consider adding for production)
- No authentication or authorization
- No error handling or logging
- Single-threaded database connection (not suitable for production)

## Security Considerations

⚠️ **For Assignment Only**: This application has basic security. For production:
- Use environment variables or properties files for sensitive data
- Implement parameterized queries to prevent SQL injection
- Add input validation and sanitization
- Implement authentication and authorization
- Use connection pooling
- Add proper error handling and logging

## Future Enhancements

- [ ] Add student update/edit functionality
- [ ] Add student delete functionality
- [ ] Implement search and filter features
- [ ] Add pagination for student list
- [ ] Create admin panel
- [ ] Implement user authentication
- [ ] Add data validation on frontend and backend
- [ ] Improve UI/UX with CSS framework

## Author

Created as part of Web Technology course assignment.

## License

MIT License - See [LICENSE.md](LICENSE.md) for details

## Support

For issues or questions about this project, please create an issue or contact the project maintainer.

---

**Last Updated**: January 2026
