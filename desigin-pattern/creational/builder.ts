// To over come telescope constructor or constructor with huge parameter we will be using builder pattern.

interface IEngine { }
interface ICarBuilder {
  setWheels(wheelCount: number): void;
  setEngine(engine: IEngine): void;
}

class Car {
  constructor() { }
  setWheels(wheelCount: number): void {

  }
  setEngine(engine: IEngine): void {

  }
}

class ToyCar {
  constructor() { }
  setWheels(wheelCount: number): void {

  }
  setEngine(engine: IEngine): void {

  }
}

class RealCarBuilder implements ICarBuilder {
  car = new Car();
  reset() {
    this.car = new Car();
  }
  setWheels(wheelCount: number): void {
    console.log("RealCar: Setting wheels", wheelCount)
  }
  setEngine(engine: IEngine): void {
    console.log("RealCar: Setting Engine")
  }
  getProduct(): Car {
    console.log("RealCar: Delivering real car")
    return this.car;
  }
}

class ToyCarBuilder implements ICarBuilder {
  car = new ToyCar();
  reset() {
    this.car = new ToyCar();
  }
  setWheels(wheelCount: number): void {
    console.log("ToyCar: Setting wheels", wheelCount)
  }
  setEngine(engine: IEngine): void {
    console.log("ToyCar: Setting Engine")
  }
  getProduct(): ToyCar {
    console.log("ToyCar: Delivering toy car")
    return this.car;
  }
}

class Director {
  builder: ICarBuilder;
  constructor(builder: ICarBuilder) {
    this.builder = builder
  }
  createToyCar() {
    this.builder.setWheels(10);
    this.builder.setEngine({});
  }
  createRealCar() {
    this.builder.setWheels(4);
    this.builder.setEngine({});
  }
}

class Applications {
  constructor() {
    this.init();
  }
  init() {
    let realCarBuilder = new RealCarBuilder();
    let director = new Director(realCarBuilder);
    director.createRealCar();
    console.log(realCarBuilder.getProduct())

    let toyCarBuilder = new ToyCarBuilder();
    let director2 = new Director(toyCarBuilder);
    director2.createRealCar();
    console.log(toyCarBuilder.getProduct())
  }
}


new Applications();
