## Getting Started

Before you begin, ensure you have the following installed on your system:

- **Java Development Kit (JDK)** 8 or higher
- **Maven** 3.6 or higher
- **MongoDB** 3.6 or higher
- **Git** for version control

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/mongodb-project.git
   cd mongodb-project
   ```

2. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # macOS with Homebrew
   brew services start mongodb-community
   
   # Linux with systemctl
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   
   # Or start MongoDB manually
   mongod
   ```

3. **Build the Project**
   ```bash
   mvn clean install
   ```

4. **Run the Application**
   ```bash
   mvn exec:java -Dexec.mainClass="MongoDB.MongoDBApp"
   ```

### Troubleshooting

**Problem**: Connection refused to MongoDB
- **Solution**: Ensure MongoDB is running on `localhost:27017`

**Problem**: Maven command not found
- **Solution**: Ensure Maven is installed and added to your PATH

**Problem**: Java version mismatch
- **Solution**: Ensure you have JDK 8 or higher installed

For more help, open an issue on GitHub.
