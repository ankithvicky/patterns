class LineItem {
  name: string;
  description: string;
  rate: number;
  quantity: number;
  total: number;
  constructor(name: string, description: string, rate: number, quantity: number) {
    this.name = name;
    this.description = description;
    this.rate = rate;
    this.quantity = quantity;
    this.total = this.rate * this.quantity;
  }
}
class Order {
  customerName: string;
  countryCode: string;
  lineItems: LineItem[];
  constructor(customerName: string, countryCode: string, lineItems: LineItem[]) {
    this.customerName = customerName;
    this.countryCode = countryCode;
    this.lineItems = lineItems;
  }
  calculateGrandTotal() {
    const itemTotal = this.lineItems.reduce((a, c) => a + c.total, 0)
    let taxPercent = 2;
    if (this.countryCode == "USA") {
      taxPercent = 5;
    }
    if (this.countryCode == "AFG") {
      taxPercent = 1;
    }
    if (this.countryCode == "IND") {
      taxPercent = 4;
    }
    return itemTotal + (itemTotal * (taxPercent / 100));
  }
}

console.log("V1 Result", new Order("Raju", "IND", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())
console.log("V1 Result", new Order("Raju", "USA", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())
console.log("V1 Result", new Order("Raju", "ITA", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())


/*
  The above class will change for each time where there is a change in contry taxation. So its so tough to handle it here since the posibility of it
  getting changed is high. we will encapsulate the logic of calculating tax in a separate function making calculateGrandTotal doesnt change
  event on new taxation.
 */


class OrderV2 {
  customerName: string;
  countryCode: string;
  lineItems: LineItem[];
  constructor(customerName: string, countryCode: string, lineItems: LineItem[]) {
    this.customerName = customerName;
    this.countryCode = countryCode;
    this.lineItems = lineItems;
  }
  calculateGrandTotal() {
    const itemTotal = this.lineItems.reduce((a, c) => a + c.total, 0)
    const taxPercent = this.getTaxPercent(this.countryCode);
    return itemTotal + (itemTotal * (taxPercent / 100));
  }

  getTaxPercent(countryCode: string) {
    let taxPercent = 2;
    if (countryCode == "USA") {
      taxPercent = 5;
    }
    if (countryCode == "AFG") {
      taxPercent = 1;
    }
    if (countryCode == "IND") {
      taxPercent = 4;
    }
    return taxPercent
  }
}

console.log("V2 Result", new OrderV2("Raju", "IND", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())
console.log("V2 Result", new OrderV2("Raju", "USA", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())
console.log("V2 Result", new OrderV2("Raju", "ITA", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())

/**
 * Thie above orderv2 class is the example of method encapsulation. Now the class owns the logic which will grow and 
 */

class Tax {
  static getTaxPercent(countryCode: string) {
    let taxPercent = 2;
    if (countryCode == "USA") {
      taxPercent = 5;
    }
    if (countryCode == "AFG") {
      taxPercent = 1;
    }
    if (countryCode == "IND") {
      taxPercent = 4;
    }
    return taxPercent
  }
}

class OrderV3 {
  customerName: string;
  countryCode: string;
  lineItems: LineItem[];
  constructor(customerName: string, countryCode: string, lineItems: LineItem[]) {
    this.customerName = customerName;
    this.countryCode = countryCode;
    this.lineItems = lineItems;
  }
  calculateGrandTotal() {
    const itemTotal = this.lineItems.reduce((a, c) => a + c.total, 0)
    const taxPercent = Tax.getTaxPercent(this.countryCode);
    return itemTotal + (itemTotal * (taxPercent / 100));
  }
}

console.log("V3 Result", new OrderV3("Raju", "IND", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())
console.log("V3 Result", new OrderV3("Raju", "USA", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())
console.log("V3 Result", new OrderV3("Raju", "ITA", [new LineItem("Rice", 'Sample description', 100, 10)]).calculateGrandTotal())

