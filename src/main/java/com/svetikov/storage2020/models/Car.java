package com.svetikov.storage2020.models;

public abstract class Car {
    private int positionX;
    private int positionZ;
    private boolean busy;

    public Car(int positionX, int positionZ,boolean busy) {
        this.positionX = positionX;
        this.positionZ = positionZ;
        this.busy=busy;
    }

    public Car() {

    }

    public int getPositionX() {
        return positionX;
    }

    public void setPositionX(int positionX) {
        this.positionX = positionX;
    }

    public int getPositionZ() {
        return positionZ;
    }

    public void setPositionZ(int positionZ) {
        this.positionZ = positionZ;
    }

    public boolean isBusy() {
        return busy;
    }

    public void setBusy(boolean busy) {
        this.busy = busy;
    }
}
