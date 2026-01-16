<%@ page import="java.sql.*" %>
<%@ page import="com.studentapp.DBConnection" %>

<html>
<head><title>Student List</title></head>
<body>
    <h2>Students List</h2>
    <table border="1">
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th></tr>
        <%
            try {
                Connection conn = DBConnection.getConnection();
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM students");

                while(rs.next()) {
        %>
        <tr>
            <td><%= rs.getInt("id") %></td>
            <td><%= rs.getString("name") %></td>
            <td><%= rs.getString("email") %></td>
            <td><%= rs.getString("course") %></td>
        </tr>
        <% 
                }
            } catch(Exception e) {
                out.println("Error: " + e.getMessage());
            }
        %>
    </table>
</body>
</html>
