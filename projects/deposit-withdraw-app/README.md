# Deposit Withdraw Web Application

A Java web application for managing bank deposit and withdrawal operations.

## Project Overview

This is a Java-based web application built with Enterprise JavaBeans (EJB) and JSP that provides banking functionality for deposits and withdrawals. The application uses a servlet-based architecture with JSP for the presentation layer.

## Technology Stack

- **Language**: Java
- **Web Framework**: Java EE (Enterprise Edition)
- **Components**: Enterprise JavaBeans (EJB), Servlets, JSP
- **Server**: Compatible with any Java EE application server (e.g., GlassFish, WildFly, JBoss)

## Project Structure

```
web-app/
├── src/
│   ├── com/bank/
│   │   ├── DepositWithdrawBean.java      # EJB Bean for business logic
│   │   └── DepositWithdrawEJB.java       # EJB interface
│   └── resources/
│       └── db.properties                  # Database configuration
├── webapp/
│   ├── index.jsp                          # Home page
│   ├── depositwithdraw.jsp               # Deposit/Withdraw operations page
│   └── WEB-INF/
│       ├── web.xml                       # Web application configuration
│       └── classes/                      # Compiled classes directory
├── lib/                                   # External libraries
└── README.md
```

## Features

- **Deposit**: Add funds to account balance
- **Withdraw**: Remove funds from account balance
- **Balance Check**: View current account balance

## Building and Deployment

### Prerequisites
- Java Development Kit (JDK) 8 or higher
- Java EE Application Server

### Build Instructions

This project requires compilation and deployment to a Java EE-compliant application server. Compilation and packaging steps depend on your build tool:

#### Using IDE (Eclipse, IntelliJ IDEA)
1. Create a new Dynamic Web Project
2. Import the source files
3. Configure the application server
4. Build and deploy

#### Manual Compilation
```bash
javac -d webapp/WEB-INF/classes src/com/bank/*.java
```

### Deployment
Deploy the `webapp` directory as a Web Application Archive (WAR) to your application server.

## Configuration

Update `src/resources/db.properties` with your database settings:

```properties
# Database configuration
db.url=jdbc:mysql://localhost:3306/bank
db.user=your_username
db.password=your_password
```

## Usage

1. Deploy the application to your Java EE server
2. Access the application via `http://localhost:8080/web-app/`
3. Navigate to the deposit/withdraw page to perform operations

## File Descriptions

- **DepositWithdrawBean.java**: Contains the business logic for deposit and withdrawal operations with balance tracking
- **DepositWithdrawEJB.java**: Defines the EJB interface for remote access
- **depositwithdraw.jsp**: JSP page for the user interface of deposit/withdraw operations
- **web.xml**: Web application deployment descriptor

## Contributing

Feel free to fork this repository and submit pull requests for improvements.

## License

[Specify your license here - e.g., MIT, Apache 2.0]

## Notes

- The default balance is initialized at $1000.00
- Withdrawal requires sufficient balance
- Only positive amounts are accepted for transactions

## Support

For issues or questions, please create an issue in the repository.
