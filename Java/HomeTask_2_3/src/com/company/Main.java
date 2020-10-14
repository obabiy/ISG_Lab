package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Salary employeeFixedSalary = new EmployeeFixedSalary();
        Salary employeeHourlySalary = new EmployeeHourlySalary();

        System.out.println("Set term (months) for employees with fixed and hourly salary rate: ");
        int term = scanner.nextInt();
        System.out.println("***********************");
        System.out.println("Fixed rate ||| Term: " + term + " | Salary: " + employeeFixedSalary.salary(term) + "$");
        System.out.println("Hourly rate ||| Term: " + term + " | Salary: " + employeeHourlySalary.salary(term) + "$");
        System.out.println("***********************");

    }
}
