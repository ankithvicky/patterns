interface ICommand {
  execute(): void;
}

class UpdateCommand implements ICommand {
  constructor(private documentId: string, private data: string) { }
  execute(): void {
    console.log("Updated", this.documentId, "With data", this.data)
  }
}

class DeleteCommand implements ICommand {
  constructor(private documentId: string) {

  }
  execute(): void {
    console.log("Deleted Document ", this.documentId);
  }
}

class Button {
  command: Function | undefined;
  setCommand(command: Function) {
    this.command = command
  }
  click() {
    this.command?.();
  }
}

const documentId: string = "f4bc1573-3990-430a-97ce-2aabccd1f61c";
const data: string = "Test";

const saveButton = new Button();
saveButton.setCommand(function () {
  new UpdateCommand(documentId, data).execute();
})

const deleteButton = new Button();
deleteButton.setCommand(function () {
  new DeleteCommand(documentId).execute();
})


saveButton.click();
deleteButton.click();
