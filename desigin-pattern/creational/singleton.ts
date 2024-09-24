class MongoDb {
  private static instance: MongoDb;
  private constructor() {
  }
  static getInstance() {
    if (!this.instance)
      this.instance = new MongoDb();
    return this.instance;
  }
}

/**
 * Usefull when accessing shared resource. Saying the code base should have single instance and 
 * all the code will get that instance to play around.
 */


const instance = MongoDb.getInstance();
const instance2 = MongoDb.getInstance();
console.log(instance === instance2)
