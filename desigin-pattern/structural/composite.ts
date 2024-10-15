interface ITask {
    display(): void;
}

class Task implements ITask {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display() {
        console.log(this.name)
    }
}
class TaskList implements ITask {
    name: string;
    tasks: ITask[] = [];
    constructor(name: string) {
        this.name = name;
    }
    addTask(task: ITask) {
        this.tasks.push(task);
    }
    display() {
        console.log(`${this.name}-List`);
        this.tasks.forEach((e, i) => {
            e.display()
        })
    }
}

const task1 = new Task("Task 1")
const task2 = new Task("Task 2")
const taskList3 = new TaskList("Task 3")
taskList3.addTask(new Task("Task 3.1"));
taskList3.addTask(new Task("Task 3.2"));

const mainTaskList = new TaskList("Main");
mainTaskList.addTask(task1);
mainTaskList.addTask(task2);
mainTaskList.addTask(taskList3);
mainTaskList.display();



interface IProduct {
    getCost(): number;
}


class Product implements IProduct {
    name: string;
    cost: number;
    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }
    getCost() {
        return this.cost
    }
}
class Box implements IProduct {
    products: IProduct[] = []
    cost: number;
    constructor(cost: number) {
        this.cost = cost;
    }
    addProduct(product: IProduct) {
        this.products.push(product);
    }
    getCost(): number {
        return this.cost + this.products.reduce((a, c) => a + c.getCost(), 0)
    }
}


const mainBox = new Box(10);
const subBox1 = new Box(2);
subBox1.addProduct(new Product("Toy1", 100))
subBox1.addProduct(new Product("Toy2", 200))
const subBox2 = new Box(2);
subBox2.addProduct(new Product("Toy3", 10))
subBox2.addProduct(new Product("Toy4", 20))
mainBox.addProduct(subBox1);
mainBox.addProduct(subBox2);

console.log(mainBox.getCost());
