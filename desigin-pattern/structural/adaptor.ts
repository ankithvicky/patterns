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
