interface IChair {
  sitOn(): void;
}

interface ISofa {
  sitOn(): void;
}

interface IFurnitureFactory {
  createChair(): IChair;
  createSofa(): ISofa;
}

class ModernChair implements IChair {
  sitOn(): void {
    console.log("Thanks for sitting on Modern chair")
  }

}
class ModernSofa implements ISofa {
  sitOn(): void {
    console.log("Thanks for sitting on Modern Sofa")
  }
}

class RetroChair implements IChair {
  sitOn(): void {
    console.log("Thanks for sitting on Retro chair")
  }

}
class RetroSofa implements ISofa {
  sitOn(): void {
    console.log("Thanks for sitting on Retro Sofa")
  }
}

class ModelFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new ModernChair();
  }
  createSofa(): ISofa {
    return new ModernSofa();
  }
}

class RetroFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new RetroChair();
  }
  createSofa(): ISofa {
    return new RetroSofa();
  }
}


class Application {
  main() {
    const furnitureFactory = new RetroFurnitureFactory();
    furnitureFactory.createChair().sitOn();
    furnitureFactory.createSofa().sitOn();
  }
}

new Application().main();
