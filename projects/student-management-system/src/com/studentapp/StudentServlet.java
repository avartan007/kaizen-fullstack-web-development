package com.studentapp;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class StudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String course = req.getParameter("course");

        try (Connection conn = DBConnection.getConnection()) {
            String sql = "INSERT INTO students(name, email, course) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.setString(3, course);
            stmt.executeUpdate();

            res.sendRedirect("viewStudents.jsp");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
