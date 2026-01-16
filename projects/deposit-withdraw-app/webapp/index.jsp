<!DOCTYPE html>
<html>
<head>
    <title>Bank</title>
</head>
<body>
    <h2>Bank Transaction</h2>
    <form action="depositwithdraw.jsp" method="post">
        Amount: <input type="number" name="amount" step="0.01" required><br><br>
        <input type="submit" name="action" value="Deposit">
        <input type="submit" name="action" value="Withdraw">
    </form>
</body>
</html>
