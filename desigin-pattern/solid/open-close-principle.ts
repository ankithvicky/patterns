class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  exportSalaryData(format: string) {
    if (format === "PDF") {
      console.log("Exployee: Importing PDF export plugin, Exporting in PDF format");
    } else if (format === "Excel") {
      console.log("Exployee: Importing Excel export plugin, Exporting in Excel format");
    }
    else if (format === "CSV") {
      console.log("Exployee: Importing CSV export plugin, Exporting in CSV format");
    }
    else if (format === "TSV") {
      console.log("Exployee: Importing TSV export plugin, Exporting in TSV format");
    } else {
      console.log("Exployee: No format has been selected");
    }
  }
}

new Employee("Chandu").exportSalaryData("PDF")
/**
 * Now employee class is dependent on so many library to print the content. In case if the application demand a new format of export, say in plain text
 * now we will keep hand in employee class. Employee class is ment to change only for logic relation to employee, not related to print functionality.
 * We can externalize the print functionality so that employee class wont be affected on new format of print.
 */

class EmployeeV2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  exportData(format: string) {
    ExporterFactory.getExporter(format).exportData();
  }
}

interface IExport {
  exportData(): void;
}


class ExporterFactory {
  static getExporter(format: string): IExport {
    if (format === "PDF") {
      return new PDFExporter();
    } else if (format === "Excel") {
      return new ExcelExporter();
    }
    else if (format === "CSV") {
      return new CSVExporter();
    }
    else if (format === "TSV") {
      return new TSVExporter();
    } else {
      throw new Error("Format not exist.");
    }
  }
}
class PDFExporter implements IExport {
  exportData() {
    console.log("Exporter: Exporting data in PDF format")
  }
}
class ExcelExporter implements IExport {
  exportData() {
    console.log("Exporter: Exporting data in Excel format")
  }
}
class CSVExporter implements IExport {
  exportData() {
    console.log("Exporter: Exporting data in CSV format")
  }
}
class TSVExporter implements IExport {
  exportData() {
    console.log("Exporter: Exporting data in TSV format")
  }
}

new EmployeeV2("Chandu").exportData("CSV");


/**
 * Now When new exporter format comes its kind of extendsaion. we dont have logic stating if / else which will be changed over time. 
 */
