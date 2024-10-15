interface IDataStorage {
    readFile(name: string): void;
    writeFile(name: string, data: any): void;
}

class FileDataStorage implements IDataStorage {
    readFile(name: string): void {
        console.log("Read from the file", name)
    }
    writeFile(name: string, data: any): void {
        console.log("Writen to file", name, "Data is", data)
    }

}

class CryptoStorageDecorator implements IDataStorage {
    wrappee: IDataStorage;
    constructor(storage: IDataStorage) {
        this.wrappee = storage;
    }

    readFile(name: string): void {
        console.log("Decryptiong data")
        this.wrappee.readFile(name);
    }
    writeFile(name: string, data: any): void {
        console.log("Encrypting data");
        this.wrappee.writeFile(name, data);
    }
}

class Application {
    constructor() {
        this.init();
    }
    init() {
        const storage = new FileDataStorage();
        const cryptoStorage = new CryptoStorageDecorator(storage);
        cryptoStorage.readFile("salary.txt");
        cryptoStorage.writeFile("salary.txt", { newValue: 100 });
    }
}

new Application();
