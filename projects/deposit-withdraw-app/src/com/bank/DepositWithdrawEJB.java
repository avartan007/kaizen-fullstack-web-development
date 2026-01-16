package com.bank;

public class DepositWithdrawEJB {

    private DepositWithdrawBean bean;

    public DepositWithdrawEJB() {
        bean = new DepositWithdrawBean();
    }

    public double depositAmount(double amount) {
        return bean.deposit(amount);
    }

    public double withdrawAmount(double amount) {
        return bean.withdraw(amount);
    }

    public double getBalance() {
        return bean.getBalance();
    }
}
