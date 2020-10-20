package com.company;

public class Main {

    public static void main(String[] args) {

        // Linked List with add and print methods

//        LinkedListISG<Integer> linkedListInteger = new LinkedListISG<Integer>();
//        linkedListInteger.add(1);
//        linkedListInteger.add(2);
//        linkedListInteger.add(3);
//        linkedListInteger.print();


        // Exception for imagible forbidden type
	    ForbiddenType forbiddenType = new ForbiddenType();
        LinkedListISG<ForbiddenType> linkedListISG = new LinkedListISG<ForbiddenType>();

        linkedListISG.add(forbiddenType);    // try to add forbidden type

//        linkedListISG.print();

    }
}
