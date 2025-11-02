import { Loadable } from "../loadable";

export class FileToJson implements Loadable {
  private readonly file: string;

  constructor(file: string) {
    this.file = file;
  }
  public async load(): Promise<Array<object>> {
    return await window.ipcRenderer.readFile(this.file) as Array<object>;
  }
}
