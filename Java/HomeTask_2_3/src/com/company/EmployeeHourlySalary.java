package com.company;

public class EmployeeHourlySalary implements Salary {

    int rateHour = 30;   // $ per hour
    int termHours;

    @Override
    public int salary(int termMonth) {
        termHours = 730 * termMonth;    //Convert month term into hours term
        return termHours * rateHour;
    }
}
