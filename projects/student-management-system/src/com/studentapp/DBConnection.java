package com.studentapp;

import java.sql.*;

public class DBConnection {

    public static Connection getConnection() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        // Use environment variables for database credentials (NEVER hardcode credentials)
        String dbUrl = System.getenv("DB_URL") != null ? 
                       System.getenv("DB_URL") : "jdbc:mysql://localhost:3306/studentdb";
        String dbUser = System.getenv("DB_USER") != null ? 
                        System.getenv("DB_USER") : "root";
        String dbPassword = System.getenv("DB_PASSWORD") != null ? 
                            System.getenv("DB_PASSWORD") : "";
        
        return DriverManager.getConnection(dbUrl, dbUser, dbPassword);
    }
}
