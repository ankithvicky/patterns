/**
 * Car with attribute engine of types CNG, Electric and mode of types self and auto. Now more the form of attributes grows the child class
 * grows exponentially. Even when a new engine comes in Petrol now we have the new sub class  PetrolManual, PetrolAuto
 */

class Car {
  drive() {
  }
}

class ElectricCar extends Car {

}

class CNGCar extends Car {

}

class CNGCarManual extends CNGCar {

}

class CNGCarAuto extends CNGCar {

}

class ElectricCarManual extends ElectricCar {

}

class ElectricCarAuto extends ElectricCar {

}


interface IEngine {
  start(): void;
}

class CNGEngine implements IEngine {
  start() {
    console.log("Starting CNG Engine")
  }
}

class ElectricEngine implements IEngine {
  start() {
    console.log("Starting Electric Engine")
  }
}

interface IMode {
  drive(): void;
}

class AutoDriveMode implements IMode {
  drive() {
    console.log("Car is moving in auto mode");
  }
}

class ManualDriveMode implements IMode {
  drive() {
    console.log("Car is moving in manual mode");
  }
}

class CarV2 {
  engine: IEngine
  driveMode: IMode;
  constructor(engine: IEngine, mode: IMode){
    this.engine = engine;
    this.driveMode = mode;
  }
  init(){
    this.engine.start();
    this.driveMode.drive();
  }
}

new CarV2(new ElectricEngine(), new AutoDriveMode()).init();
new CarV2(new CNGEngine(), new ManualDriveMode()).init();
/**
 * Inheritance represent is a relationship and composition represent has a relationship. 
 * Electric car is a car, Car has engine. It resembels strategic pattern
 */
