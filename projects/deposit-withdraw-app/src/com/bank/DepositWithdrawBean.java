package com.bank;

public class DepositWithdrawBean {

    private double balance = 1000.00; // Initial balance

    public double deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
        return balance;
    }

    public double withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        }
        return balance;
    }

    public double getBalance() {
        return balance;
    }
}
