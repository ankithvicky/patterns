interface IDevice {
  turnOn(): void
  turnOff(): void;
  getDeviceState(): boolean;
  setVolume(value: number): void;
  getVolume(): number;
}

class TV implements IDevice {
  private volume: number = 40;
  private deviceState: boolean = false;
  turnOn(): void {
    this.deviceState = true;
    console.log("TV Device got turned on");
  }
  turnOff(): void {
    this.deviceState = false;
    console.log("TV Device got turned off");
  }
  getDeviceState(): boolean {
    return this.deviceState;
  }
  setVolume(value: number): void {
    this.volume = value;
    console.log("TV Device volume set to ", value);
  }
  getVolume(): number {
    return this.volume;
  }

}

class Radio implements IDevice {
  private volume: number = 40;
  private deviceState: boolean = false;
  turnOn(): void {
    this.deviceState = true;
    console.log("Radio Device got turned on");
  }
  turnOff(): void {
    this.deviceState = false;
    console.log("Radio Device got turned off");
  }
  getDeviceState(): boolean {
    return this.deviceState;
  }
  setVolume(value: number): void {
    this.volume = value;
    console.log("Radio Device volume set to ", value);
  }
  getVolume(): number {
    return this.volume;
  }
}

class Remote {
  private device: IDevice;
  constructor(device: IDevice) {
    this.device = device;
  }
  powerButtonPress() {
    this.device.getDeviceState() ? this.device.turnOn() : this.device.turnOff();
  }
  volumeIncrease() {
    if (this.device.getVolume() == 100) return;
    this.device.setVolume(this.device.getVolume() + 10);
  }
  volumeDecrease() {
    if (this.device.getVolume() == 0) return;
    this.device.setVolume(this.device.getVolume() - 10);
  }
}


let device = new TV();
let remote = new Remote(device);
remote.powerButtonPress();
remote.volumeDecrease();
remote.volumeDecrease();
remote.volumeDecrease();
