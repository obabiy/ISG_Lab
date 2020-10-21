package com.company;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.LinkedList;
import java.util.List;

public class LinkedListISG<E>{
    public Node<E> head;

    @HeadLinkedListAnnotation
    public E firstValue = null;

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
        }

        if (head.item == null) {
                head = node;
                firstValue = head.item;
            } else {
                Node<E> temp = head;

                while (temp.next != null) {
                    temp = temp.next;
                }

                temp.next = node;
            }

    }

    @Deprecated
    public void oldFunctionality(E value){
        // some old code
    }

    public void print(){
        Node<E> temp = head;
        while(temp.next != null) {
            System.out.println(temp.item);
            temp = temp.next;
        }
        System.out.println(temp.item);
    }

//    public void printNumbers(){
//        Node<E> temp = head;
//
//        while(temp.next != null) {
//            if(temp.item instanceof Number){
//                @NumberAnnotation
//
//            }
//        }
//        System.out.println(temp.item);
//
//    }

}
