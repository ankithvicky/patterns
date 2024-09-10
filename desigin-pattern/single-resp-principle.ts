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
  exportSalaryData(format: string) {
    Exporter.exportData(format);
  }
}

class Exporter {
  static exportData(format: string) {
    if (format === "PDF") {
      console.log("Exporter: Importing PDF export plugin, Exporting in PDF format");
    } else if (format === "Excel") {
      console.log("Exporter: Importing Excel export plugin, Exporting in Excel format");
    }
    else if (format === "CSV") {
      console.log("Exporter: Importing CSV export plugin, Exporting in CSV format");
    }
    else if (format === "TSV") {
      console.log("Exporter: Importing TSV export plugin, Exporting in TSV format");
    } else {
      console.log("Exporter: No format has been selected");
    }
  }
}
new EmployeeV2("Chandu").exportSalaryData("PDF")
