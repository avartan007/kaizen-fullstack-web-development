package com.bank;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class DepositWithdrawServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        String amountStr = request.getParameter("amount");

        double amount = 0;
        if (amountStr != null && !amountStr.isEmpty()) {
            try {
                amount = Double.parseDouble(amountStr);
            } catch (NumberFormatException e) {
                // Invalid input, handle appropriately
                response.sendRedirect("depositwithdraw.jsp");
                return;
            }
        }

        DepositWithdrawEJB ejb = new DepositWithdrawEJB();
        double balance = 0;

        if ("deposit".equals(action)) {
            balance = ejb.depositAmount(amount);
        } else if ("withdraw".equals(action)) {
            balance = ejb.withdrawAmount(amount);
        }

        // Store balance to forward to the JSP
        request.setAttribute("balance", balance);
        RequestDispatcher dispatcher = request.getRequestDispatcher("depositwithdraw.jsp");
        dispatcher.forward(request, response);
    }
}
