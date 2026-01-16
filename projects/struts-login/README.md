# Struts Login Application

A simple login application built with Apache Struts framework for web technology assignment.

## Features

- User authentication with username and password
- Struts framework integration
- Form validation and action handling
- Success and failure response pages

## Project Structure

```
StrutsLogin/
├── src/
│   └── com/example/
│       ├── action/
│       │   └── LoginAction.java       # Action handler for login requests
│       └── form/
│           └── LoginForm.java         # Form bean for login form
├── WebContent/
│   ├── login.jsp                      # Login form page
│   ├── success.jsp                    # Success response page
│   ├── failure.jsp                    # Failure response page
│   └── WEB-INF/
│       ├── struts-config.xml          # Struts framework configuration
│       └── web.xml                    # Web application deployment descriptor
└── README.md
```

## Default Credentials

- **Username:** admin
- **Password:** admin

## Technologies Used

- Apache Struts Framework
- Java
- JSP (Java Server Pages)
- Servlet

## How to Run

1. Build the project using your IDE or build tool
2. Deploy to a web server (e.g., Tomcat)
3. Access the login page at `http://localhost:8080/StrutsLogin/login.do`
4. Enter credentials: admin/admin for successful authentication

## Notes

- This is an educational assignment project
- Default credentials are hardcoded for demonstration purposes
- For production use, implement proper security measures
