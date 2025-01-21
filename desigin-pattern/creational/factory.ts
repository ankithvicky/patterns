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
 * Terms
   - Product - Will be outcome of the factory method.
   - Product interface - All product should adhere to same interface so that client can interact with the product easily.
   - Abstract factory method - Means all the sub class should have implementation of the factory method. So that base class will return the respective product.
   - Default factory method - Abstract class will provide default init of the product. But we can override the same in the base class.
   - Creator class - Not only has factory method. But it aslo has other responsibility.
 * Steps to achieve
   - Create a product interface which all the product should adhere.
   - Create empty (abstract) or functional factory method.
   - Remove all the init code in the creator class and replace it with invoking factory method.
   - Optionally we can use parameter to return different type of products.
   - Now we can create sub class to return respective product.
 * Pros
   - Avoid coupling with concrete product & the creator.
   - SRP - Moving product creation part to the factory method.
   - Open close principle - We can bring in new product impl without changing code.
 * Scenario
   - Now in the above code the logistic piece of code works well with truck transport if the app gets popular and you are trying to 
   - To extend the business to delivering cargo by sea, then we have to introduce sea transport. now Logistics class should be working with both
   - truck and Ship transport, which requires code changes in Logistic class. And this will change even if a new mode of transport comes in.
   - To solve this we will be going with the factory method. by moving all the init to the factory method.
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

