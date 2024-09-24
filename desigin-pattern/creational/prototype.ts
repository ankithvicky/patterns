/**
 * Prototype pattern is useful to close an existing object. Client code will be depend on the interface than the concrete class.
 */

interface IClone {
    clone(): Shape;
}
abstract class Shape {
    x: number | undefined;
    y: number | undefined;
    constructor(data: Shape | null) {
        if (data) {
            this.x = data.x;
            this.y = data.y;
        }
    }
}

class Rectange extends Shape implements IClone {
    length: number | undefined;
    height: number | undefined;
    constructor(data: Rectange | null) {
        super(data);
        if (data) {
            this.height = data.height;
            this.length = data.length;
        }
    }
    clone(): Shape {
        return new Rectange(this);
    }
}

class Circle extends Shape implements IClone {
    radius: number | undefined;
    constructor(data: Circle | null) {
        super(data);
        if (data) {
            this.radius = data.radius;
        }
    }
    clone(): Shape {
        return new Circle(this);
    }
}

class PrototypeFactory {
    constructor() { }
    prototype: { [key: string]: IClone } = {}
    addProtoType(name: string, data: IClone) {
        this.prototype[name] = data;
    }
    getProtoType(name: string) {
        return this.prototype[name];
    }
}

const smallCircle = new Circle(null);
smallCircle.radius = 10;
smallCircle.x = 0
smallCircle.y = 0;

const prototypeFactory = new PrototypeFactory();
prototypeFactory.addProtoType("smallCircle", smallCircle);
const smallRectangle = new Rectange(null);
smallRectangle.x = 10;
smallRectangle.y = 10;
smallRectangle.length = 10;
smallRectangle.height = 5;
prototypeFactory.addProtoType("smallRectangle", smallRectangle);

console.log(prototypeFactory.getProtoType("smallRectangle").clone());
console.log(prototypeFactory.getProtoType("smallCircle").clone());
