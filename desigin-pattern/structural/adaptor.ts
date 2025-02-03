/**
Procedure
1. The client will not talk to the service directly.
2. The client will not be dependent on the concrete adopter as well.
3. The client will provide an interface that the adopter will implement.
4. The concrete adopter implements the client interface. So that the client can communicate with any adopter.
5. The adopter wraps the service object and communicates with it in their format.

Client - Client interface -> Concrete adopter -> Service class
Payment service (client) -> Create order (client interface) -> Razorpay payment adopter (Concrete adopter)
Payment service (client) -> Create order (client interface) -> Paypal payment adopter (Concrete adopter)

*/

class RoundHole {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  fit(peg: IRoundPeg) {
    console.log(`Can fit Peg? ${peg.getRadius() <= this.radius}`);
  }
}


interface IRoundPeg {
  getRadius(): number;
}
class RoundPeg implements IRoundPeg {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getRadius(): number {
    return this.radius;
  }
}



class SquarePeg {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
  getWidth(): number {
    return this.width;
  }

}

class SquarePegRoundAdaptor implements IRoundPeg {
  squarePeg: SquarePeg
  constructor(squarePeg: SquarePeg) {
    this.squarePeg = squarePeg;
  }
  getRadius(): number {
    return (this.squarePeg.getWidth() * Math.sqrt(2)) / 2
  }
}

let roundHole = new RoundHole(10)
let roundPeg = new RoundPeg(8);
let squarePeg = new SquarePeg(18);
let squarePegAdaptor = new SquarePegRoundAdaptor(squarePeg);
roundHole.fit(roundPeg);
roundHole.fit(squarePegAdaptor);
