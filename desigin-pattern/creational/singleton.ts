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
 * 1. Useful when accessing shared resources. Saying the code base should have a single instance and 
 * all the code will get that instance to play around.
 * 2. It can be used as a global variable by overriding its value should be restricted.
 */


const instance = MongoDb.getInstance();
const instance2 = MongoDb.getInstance();
console.log(instance === instance2)
