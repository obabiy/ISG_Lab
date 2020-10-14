package com.company;

public class Main {

    public static void main(String[] args) {
        Cat cat = new Cat();
        Dog dog = new Dog();
        Cow cow = new Cow();

        cat.voice();
        System.out.println("*****************");

        dog.voice();
        System.out.println("*****************");

        cow.voice();
        System.out.println("*****************");
    }
}
