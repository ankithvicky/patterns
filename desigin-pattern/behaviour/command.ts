interface ICommand {
  execute(): void;
}

class Editor {
  text: string = "";
  selectedText: string = "";
  getSelection() {
    return this.selectedText;
  }
  deleteSelection() {
    this.text = this.text.replace(this.selectedText, "");
  }
  doSelection(text: string) {
    this.selectedText = text;
  }
  replaceSelection(text: string) { }
}

class Button {
  command: Function | undefined;
  setCommand(command: Function) {
    this.command = command;
  }
  click() {
    if (this.command)
      this.command();
  }
}

class App {
  editor: Editor = new Editor();
  clipboard: string = "";
  history: Command[] = [];
  copyButton: Button | undefined;
  cutButton: Button | undefined;

  createGUI() {
    const app = this;
    const editor = this.editor;
    this.editor.text = "Hello world";
    this.copyButton = new Button();
    this.copyButton.setCommand(function () {
      const command = new CopyCommand(app, editor);
      command.execute();
      app.history.push(command);
    });
    this.cutButton = new Button();
    this.cutButton.setCommand(function () {
      console.log("Execution of cut command")
      const command = new CutCommand(app, editor);
      command.execute();
      app.history.push(command);
    });
  }
  undo() {
    const lastCommand = this.history.pop();
    if (lastCommand) lastCommand.undo();
  }
}

abstract class Command implements ICommand {
  backupText: string = "";
  app: App;
  editor: Editor;
  constructor(app: App, editor: Editor) {
    this.app = app;
    this.editor = editor;
  }
  execute(): void {
    throw new Error("Method not implemented.");
  }
  undo() {
    this.editor.text = this.backupText;
  }
}

class CopyCommand extends Command {
  execute(): void {
    this.app.clipboard = this.editor.text;
  }
}

class CutCommand extends Command {
  execute(): void {
    this.backupText = this.editor.text;
    this.app.clipboard = this.editor.text;
    this.editor.deleteSelection();
  }
}

const app = new App();
app.createGUI();
app.editor.doSelection(" world");
console.log(app.editor.text, app.editor.getSelection())
app.cutButton?.click();
console.log("Text is", app.editor.text)
app.undo();
console.log("Text is", app.editor.text)
