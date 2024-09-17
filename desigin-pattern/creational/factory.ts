class Logistics {
  transport = new Truck();
  deliver() {
    this.transport.deliver();
  }
}

class Truck {
  deliver() {
    console.log("Delivering cargo by land");
  }
}

new Logistics().deliver();

/**
 * Now in the above code the logistic piece of code works well with truck transport if the app gets popular and you are trying to 
 * To extend the business to delivering cargo by sea, then we have to introduce sea transport. now Logistics class should be working with both
 * truck and Ship transport, which requires code changes in Logistic class. And this will change even if a new mode of transport comes in.
 * To solve this we will be going with the factory method. by moving all the init to the factory method.
 */

abstract class LogisticsV2 {
  deliver() {
    this.getTransport().deliver();
  }
  abstract getTransport(): ITransport;
}

class SeaLogisticsV2 extends LogisticsV2 {
  getTransport(): ITransport {
    return new ShipV2();
  }
}

class RoadLogisticsV2 extends LogisticsV2 {
  getTransport(): ITransport {
    return new TruckV2();
  }
}


interface ITransport {
  deliver(): void;
}

class TruckV2 implements ITransport {
  deliver() {
    console.log("Using factory: Delivering cargo by land");
  }
}


class ShipV2 implements ITransport {
  deliver() {
    console.log("Using factory: Delivering cargo by sea");
  }
}


new SeaLogisticsV2().deliver();
new RoadLogisticsV2().deliver();

/**
 * Single responsibility principle - Ensuring the factory method creates the object rather than the base class.
 * Open-close principle - Can extend the transport by creating a new concrete creator class.
 */

