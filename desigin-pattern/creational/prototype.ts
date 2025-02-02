/**
Procedure
1. Create a common interface for cloning which all the concrete classes will use for cloning
2. Concrete class must have a prototype constructor to create a clone of it.
3. The Clone method will call the prototype constructor to create a clone.
4. If it's a subclass the clone should call the superclass to clone its private variables.
5. Additionally we can have a repository (Hashmap) to store the frequently accessed prototypes.

* A prototype pattern is useful for closing an existing object. Client code will depend on the interface rather than the concrete class.
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

class Rectangle extends Shape implements IClone {
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
const smallRectangle = new Rectangle(null);
smallRectangle.x = 10;
smallRectangle.y = 10;
smallRectangle.length = 10;
smallRectangle.height = 5;
prototypeFactory.addProtoType("smallRectangle", smallRectangle);

console.log(prototypeFactory.getProtoType("smallRectangle").clone());
console.log(prototypeFactory.getProtoType("smallCircle").clone());
