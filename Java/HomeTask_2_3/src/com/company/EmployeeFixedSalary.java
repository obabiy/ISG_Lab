package com.company;

public class EmployeeFixedSalary implements Salary {

    int rateMonth = 500;  // $ per month

    @Override
    public int salary(int termMonth) {
        return termMonth * rateMonth;
    }
}
