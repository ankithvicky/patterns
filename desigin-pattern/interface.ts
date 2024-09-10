class HyudaiI10 {
  name: string = "Hundai Grand I10";
  drive() {
    console.log("driving car Hyundai grand i10");
  }
}

class Driver {
  userName: string;
  constructor(userName: string) {
    this.userName = userName;
  }
  drive(car: HyudaiI10) {
    car.drive();
  }
}

new Driver("Vicky").drive(new HyudaiI10());

/**
 * Now user can drive only hyundaiCar not any other car. Client has to depend on deterface than the concrete implementation.
 * Actually when a user learns to drive he can drive car of any model / make. So drives should reference a car than a car implemntation.
 */

interface ICar {
  drive(): void;
}

class HyudaiI10V2 implements ICar {
  drive() {
    console.log("Driving Hyundai grand I10");
  }
}

class DusterV2 implements ICar {
  drive() {
    console.log("Driving Renould duster");
  }
}

class DriverV2 {
  userName: string;
  constructor(userName: string) {
    this.userName = userName;
  }

  drive(car: ICar){
    car.drive()
  }
}

const user = new DriverV2("Raj");
user.drive(new HyudaiI10V2())
user.drive(new DusterV2())

/**
 * Now user can drive any concrete implementation of car interface. He can now drive any actual car which can drive. not dependent on sepcific 
 * car.
 */
