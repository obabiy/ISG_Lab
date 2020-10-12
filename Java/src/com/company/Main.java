package com.company;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        System.out.println("Prime numbers between 2 and 100:");

        ArrayList<Integer> primeNumbers = new ArrayList<Integer>();

        for(int number = 2; number < 100; number++){
            switch(number){
                case 2:
                    primeNumbers.add(number);
                    break;
                case 3:
                    primeNumbers.add(number);
                    break;
                case 5:
                    primeNumbers.add(number);
                    break;
                case 7:
                    primeNumbers.add(number);
                    break;
                default:
                    if(number%2 != 0 && number%3 !=0 && number%5!=0 && number%7!=0) primeNumbers.add(number);
            }
        }
        System.out.println(primeNumbers);
    }
}
