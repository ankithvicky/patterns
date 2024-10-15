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
