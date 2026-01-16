# MongoDB Project

A Java application for performing CRUD operations with MongoDB databases.

## Overview

This project demonstrates MongoDB integration with Java, providing practical examples of database operations including insert, read, update, and delete (CRUD) operations.

## Project Structure

```
├── src/main/java/MongoDB/
│   ├── MongoDBApp.java          # Main MongoDB CRUD application
│   ├── DatabaseApp.java          # Database operation utilities
│   └── practice.java             # Practice/example code
├── pom.xml                       # Maven configuration
├── LICENSE                       # MIT License
└── README.md                     # This file
```

## Features

- **Insert Documents** - Add new records to MongoDB collections
- **Display Documents** - Retrieve and display documents from collections
- **Update Documents** - Modify existing documents
- **Delete Documents** - Remove documents from collections
- **Database Management** - Drop databases and manage collections

## Requirements

- Java 8 or higher
- Maven 3.6 or higher
- MongoDB 3.6+ (running locally or accessible via network)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/mongodb-project.git
   cd mongodb-project
   ```

2. Ensure MongoDB is installed and running on `localhost:27017`

3. Install dependencies with Maven:
   ```bash
   mvn clean install
   ```

## Usage

### Compile with Maven
```bash
mvn compile
```

### Run the Application
```bash
mvn exec:java -Dexec.mainClass="MongoDB.MongoDBApp"
```

### Create Executable JAR
```bash
mvn clean package
java -cp target/mongodb-project-1.0.0.jar MongoDB.MongoDBApp
```

## Maven Dependencies

- **MongoDB Java Driver** 3.12.14 - Official MongoDB driver for Java
- **JUnit** 4.13.2 - Testing framework

## Configuration

Before running, ensure:
1. MongoDB server is running on `localhost:27017`
2. Update database and collection names in the source code as needed:
   - Default database: `myDatabase`
   - Default collection: `records` or `userCollection`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to:
- Submit bug reports and feature requests via GitHub issues
- Fork the repository and submit pull requests
- Improve documentation and code examples

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Getting Help

For MongoDB documentation and tutorials, visit:
- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [MongoDB Java Driver Documentation](https://mongodb.github.io/mongo-java-driver/)

## Author

Created as a MongoDB learning project.
