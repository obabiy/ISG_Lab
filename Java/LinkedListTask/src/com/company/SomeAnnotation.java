package com.company;

import java.lang.annotation.*;

/**
 *  Example of creating annotation from lecture
 */
@Documented // попадает в документация
@Inherited  // доступна во все дочерние классы, если у родителя есть аннотация
@Retention(RetentionPolicy.RUNTIME) // когда аннотация будет отработана
@Target(ElementType.FIELD) // для чего предназначена аннотация (поля, класса и тд)
public @interface SomeAnnotation {
    String name();
    int age() default 25;

}
