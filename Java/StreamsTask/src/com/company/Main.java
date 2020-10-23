package com.company;

import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        evenNumbersStream(0, 100);      // even number stream | seed - first number; if limit = 0 -> infinity loop
    }

    public static void evenNumbersStream(int seed, int limit){
        Stream<Integer> inputStream = Stream.iterate(seed, i -> i + 1);
        if(limit != 0) inputStream.filter(i -> i % 2 == 0).limit(limit).forEach(System.out::println);  //stream with limit
        else inputStream.filter(i -> i % 2 == 0).forEach(System.out::println);      // no limit -> infinity stream
    }

    public static void fibonacciStream(int limitNums){

    }
}
