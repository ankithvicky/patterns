/**
 * 1. Sub class should accept any form of abstraction but not a different concrete implementation to base class.
 */
interface IEngine {

}

class PetrolEngine implements IEngine {

}

class CNGEngine implements IEngine {

}


abstract class Car {
  constructor() { }
  abstract installEngine(engine: PetrolEngine): void;
}


class HyundaiCar extends Car {
  installEngine(engine: CNGEngine): void {
    // here this code violates Substituation principle. Becase hyuncai car doesnt accept parameter which the base class supports
    console.log("Engine installed");
  }
}


/**
 * 2. Sub class can return data of concrete impl while the base class return the interface or the abstract.
 */


abstract class CarV2 {
  abstract getEngine(): IEngine
}

class HyundaiCarV2 extends CarV2 {
  getEngine(): PetrolEngine {
    return new PetrolEngine();
  }
}


/**
 * 3. Methods in the subclass shouldnt throw exception which the base class isnt expected to throw.
 */

class HyundaiCarEVV2 extends CarV2 {
  getEngine(): PetrolEngine {
    throw "I dont have engine."
  }
}


/**
 * 4. A sub class shouldnt enforce additional contrainst which the base class isnt aware of.
 * Ex. Base class accept a number, but sub class accept only positive number.
 * 5. A sub class shouldnt weeken the condition by overridding. 
 * Ex. Base class open the db connection, read and close. But if the base class
 * opens , read and leave the connection open for further use then its violation substitutation pricniple 
 * 6. Subclass shouldnt change the value of super class private field. (We can do it in js, python, since there is no private member)
 */


/**
 * In below example important doucment cant implement the save mehtod.
 */

abstract class ProjectDocument {
  fileName: string;
  description: string;
  constructor(fileName: string, description: string) {
    this.fileName = fileName;
    this.description = description;
  }
  abstract save(): void;
  abstract open(): void;
}

class ImportantDocument extends ProjectDocument {
  save(): void {
    throw new Error("Cant save important document .");
  }
  open(): void {
    console.log("Opending important document");
  }

}

class Project {
  documents: ProjectDocument[];
  constructor(documents: ProjectDocument[]) {
    this.documents = documents;
  }
  saveAll() {
    this.documents.forEach(document => document.save())
  }
  openAll() {
    this.documents.forEach(document => document.open())
  }
}


// new Project([new ImportantDocument("secret.txt", "secret value")]).saveAll();



interface IDocument {
  open(): void;
}

class WritableDoc implements IDocument {
  open(): void {
    console.log("Opening writable doc")
  }
  save(): void {
    console.log("Saving writable doc");
  }
}

class ReadOnlyDoc implements IDocument {
  open(): void {
    console.log("Opending readonly document");
  }

}

class ProjectV2 {
  documents: IDocument[];
  constructor(documents: IDocument[]) {
    this.documents = documents;
  }
  saveAll() {
    this.documents.forEach(document => {
      if (document instanceof WritableDoc) {
        document.save();
      } else {
        console.log("Skip saving, Document is not writable")
      }
    })
  }
  openAll() {
    this.documents.forEach(document => document.open())
  }
}


new ProjectV2([new WritableDoc(), new ReadOnlyDoc()]).saveAll();
