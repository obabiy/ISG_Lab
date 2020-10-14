package com.company;

public class Main {

    public static void main(String[] args) {
	    BoxContainer container = new BoxContainer(100);
	    Shape cube = new Shape();
        Shape sphere = new Shape();

	    cube.setVolume(40);
	    sphere.setVolume(80);

        container.addShape(cube);
        container.addShape(sphere);
    }
}

