package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        evenNumbersStream(0, 100);      // even number stream | seed - first number; if limit = 0 -> infinity loop
        fibonacciStream(50);                // fibonacci series with limit numbers
    }

    public static void evenNumbersStream(int seed, int limit){
        Stream<Integer> inputStream = Stream.iterate(seed, i -> i + 1);
        if(limit != 0) inputStream.filter(i -> i % 2 == 0).limit(limit).forEach(System.out::println);  //stream with limit
        else inputStream.filter(i -> i % 2 == 0).forEach(System.out::println);      // no limit -> infinity stream
    }

    public static void fibonacciStream(long limitNums){
        long[] arrFib = {1, 1};

        Stream.iterate(arrFib, a -> a = new long[]{a[1], a[0] + a[1]}).limit(limitNums).forEach(a -> System.out.println(a[0]));
    }
}
