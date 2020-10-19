package com.company;

public class LinkedListISG<E>{

    int size = 0;
    Node<E> temp;

    public void add(E value){
        if(size == 0){
            temp = new Node<E>(null ,value, null);
            size++;
        }else{
            temp = new Node<E>(temp, value, null);
            size++;
        }
    }

    public void print(){
        Node<E> tempPrint  = temp;
        do{
            System.out.println(tempPrint.item);
            tempPrint = tempPrint.prev;
        }
        while(tempPrint != null);
    }

}
