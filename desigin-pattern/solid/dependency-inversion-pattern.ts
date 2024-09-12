class Order {
    database: MySQLDatabase;
    constructor(database: MySQLDatabase) {
        this.database = database;
    }
    save() {
        this.database.save();
    }
}

class MySQLDatabase {
    save() {
        console.log("Saved in MySQL DB");
    }
}

/**
 * Here higher level class should not depend on the lower level of class. Higher level class is kind of business logic which dictates low level class
 * DB to store the data.
 * Low level class should use interface so that high level class depends on interface rather than concrete implementation.
 */



class OrderV2 {
    database: IDB;
    constructor(database: IDB) {
        this.database = database;
    }
    save() {
        this.database.save();
    }
}

interface IDB {
    save(): void
}

class MySQLDatabaseV2 implements IDB {
    save() {
        console.log("Saved in MySQL DB");
    }
}

class MongoDatabaseV2 implements IDB {
    save() {
        console.log("Saved in Mongo DB");
    }
}

/**
 * Here higher level class depends on IDB rather than concrete implementation. making the business logic doesnt changes if anything 
 * goes inside the low level class. 
 */
