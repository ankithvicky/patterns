class BallTexture {
  color: string;
  size: number;
  constructor(color: string,
    size: number) {
    this.color = color;
    this.size = size;
  }
}

class Ball {
  x: number;
  y: number;
  texture: BallTexture;
  constructor(x: number,
    y: number, texture: BallTexture) {
    this.x = x;
    this.y = y;
    this.texture = texture;
  }
}

class BallFactory {
  static textureMap: { [key: string]: BallTexture } = {}
  constructor() { }
  static getTexture(color: string, size: number): BallTexture {
    const key = `${color}-${size}`;
    if (!this.textureMap[key])
      this.textureMap[key] = new BallTexture(color, size);
    return this.textureMap[key];
  }
}

class Application {
  balls: Ball[] = []
  constructor() {
    this.init();
  }
  init() {
    const texture = [
      { color: "Red", size: 10 },
      { color: "Green", size: 10 },
      { color: "Yellow", size: 10 },
      { color: "Orange", size: 10 },
      { color: "Pink", size: 10 },
      { color: "Black", size: 10 },
      { color: "White", size: 10 },
      { color: "Grey", size: 10 },
      { color: "Blue", size: 10 },
      { color: "Gold", size: 10 }
    ];
    for (let i = 0; i < 10000; i++) {
      const randomTexture = Math.floor(Math.random() * 10)
      this.balls.push(new Ball(i, i, BallFactory.getTexture(texture[randomTexture].color, texture[randomTexture].size)));
    }
    console.log("Total balls", this.balls.length)
    console.log("Total texture", Object.keys(BallFactory.textureMap).length)
  }
}

new Application();
