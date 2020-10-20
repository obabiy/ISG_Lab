package com.company;

import java.util.LinkedList;
import java.util.List;

public class LinkedListISG<E>{

    Node<E> head;

    {
        try {
            head = new Node<E>(null, null, null);
        } catch (NodeValueException e) {
            e.printStackTrace();
        }
    }

    public void add(E value){
        Node<E> node = null;
        try {
            node = new Node<E>(null, value, null);
        } catch (NodeValueException e) {
            e.printStackTrace();
        }finally {
            System.out.println("Message from finally");
        }

        if (head.item == null) {
                head = node;
            } else {
                Node<E> temp = head;

                while (temp.next != null) {
                    temp = temp.next;
                }

                temp.next = node;
            }

    }

//    public void add(E value, int index){
//        int indexForValue = index;
//        int indexHead = 0;
//        Node<E> node = new Node<E>(null, value, null);
//
//        Node<E> temp = head;
//
//        while(indexHead != indexForValue){
//
//            indexHead++;
//        }
//
//    }

    public void print(){
        Node<E> temp = head;
        while(temp.next != null) {
            System.out.println(temp.item);
            temp = temp.next;
        }
        System.out.println(temp.item);

    }

}
