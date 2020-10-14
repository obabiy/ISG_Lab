package com.company;

public class BoxContainer{

    private int containerVolume;

    public BoxContainer(int containerVolume) {
        this.containerVolume = containerVolume;
    }

    public int getContainerVolume() {
        return containerVolume;
    }

    public void setContainerVolume(int containerVolume) {
        this.containerVolume = containerVolume;
    }

    public boolean addShape(Shape shape){

        if(shape.getVolume()>0 && shape.getVolume() <= containerVolume){
            setContainerVolume(containerVolume-=shape.getVolume());
            System.out.println("Shape`s volume: " + shape.getVolume());
            System.out.println("Shape is added. Current container volume: " + getContainerVolume());
            System.out.println("************************");
            return true;
        }else if(shape.getVolume()>0 && shape.getVolume() > containerVolume){
            System.out.println("Shape`s volume: " + shape.getVolume());
            System.out.println("Shape is bigger than available space");
            System.out.println("Current container volume: " + getContainerVolume());
            System.out.println("************************");
            return false;
        }else{
            System.out.println("Wrong shape`s value");
            System.out.println("Current container volume: " + getContainerVolume());
            System.out.println("************************");
            return false;
        }

    }
}
