package com.company;

public class Shape {
    private int volume;

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        if(volume>0){
            this.volume = volume;
        }else{
            this.volume = 0;
        }
    }
}
