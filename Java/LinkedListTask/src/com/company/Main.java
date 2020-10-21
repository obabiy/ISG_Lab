package com.company;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {
        /**
         * Task with creating LinkedList.
         * Here is example of adding values to list and then print them
         */
//        LinkedListISG<Integer> linkedListInteger = new LinkedListISG<Integer>();
//        linkedListInteger.add(1);
//        linkedListInteger.add(2);
//        linkedListInteger.add(3);
//        linkedListInteger.print();

        /**
         * Task with custom Exception.
         * Exception forbids using Node object as value of LinkedLists
         * Example shows try to add Node object. After that we can see NodeValueException.
         */
//        ForbiddenType forbiddenType = new ForbiddenType();
//        LinkedListISG<ForbiddenType> linkedListISG = new LinkedListISG<ForbiddenType>();
//        linkedListISG.add(forbiddenType);
        /**
         * Task with annotations.
         * Example of using default annotations and creating/using custom one.
         *
         * 1. Deprecated annotation example
         * 2. Created annotation HeadLinkedListAnnotation which annotated value of
         *     the first node in custom LinkedList
         * 3. Method printFirstElement shows the first element of list using reflection
         */
        LinkedListISG list = new LinkedListISG();        // 1
        list.oldFunctionality(2);

        LinkedListISG<Integer> listCustomAnnotation = new LinkedListISG<Integer>();   // 2
        listCustomAnnotation.add(19);
        listCustomAnnotation.add(10);
        listCustomAnnotation.add(15);
        listCustomAnnotation.add(29);
        printFirstElement(list, list.getClass());


    }

    /**
     * The method which shows the first element in list using reflection.
     *
     * @param obj
     * @param c
     */
    public static void printFirstElement(Object obj, Class c){
        Field[] fields = c.getDeclaredFields();
        for(Field field : fields){
            Annotation[] annotations = field.getDeclaredAnnotations();
            for(Annotation annotation : annotations){
                if(annotation.annotationType().equals(HeadLinkedListAnnotation.class)){
                    try {
                        System.out.println("The first element of LinkedList: " + field.get(obj));
                    } catch (IllegalAccessException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

}
