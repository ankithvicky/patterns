class VideoConverterFaced {
  private handBreakJsInstance: any;
  constructor() {
    this.handBreakJsInstance = {};
  }

  convert(fileURI: string, targetFormat: string) {
    // this.handBreakJsInstance.convert()
  }
}


class Application {
  constructor() {
    this.init()
  }
  init() {
    const videoConverter = new VideoConverterFaced();
    videoConverter.convert("src/assets/trailer.mp4", "avi");
  }

}
