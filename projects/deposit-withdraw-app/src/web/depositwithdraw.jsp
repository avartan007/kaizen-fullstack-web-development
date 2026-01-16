<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bank Deposit and Withdrawal</title>
</head>
<body>
    <h1>Deposit and Withdrawal Transaction</h1>
    <form action="depositwithdraw.jsp" method="post">
        <label for="amount">Enter Amount:</label>
        <input type="text" id="amount" name="amount" required/><br/><br/>
        <button type="submit" name="action" value="deposit">Deposit</button>
        <button type="submit" name="action" value="withdraw">Withdraw</button>
    </form>

    <h2>Current Balance: ${balance}</h2>
</body>
</html>
