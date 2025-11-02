export class RequestData {
  private filename: string | undefined;
  private fields: Record<string, string> = {};
  private date: Date | undefined;

  constructor(filename?: string) {
    this.filename = filename;
  }

  // Filename
  public getFilename(): string | undefined {
    return this.filename;
  }
  public setFilename(value: string): void {
    this.filename = value;
  }

  // Fields
  public getFields(): Record<string, string> {
    return this.fields;
  }
  public setFields(value: Record<string, string>): void {
    this.fields = value;
  }

  public get(key: string): string {
    return this.fields[key];
  }
  public set(key: string, value: string): void {
    this.fields[key] = value;
  }

  // Title
  public getTitle(): string {
    return this.fields['title'];
  }
  public setTitle(value: string): void {
    this.fields['title'] = value;
  }

  // Name
  public getName(): string {
    return this.fields['name'];
  }
  public setName(value: string): void {
    this.fields['name'] = value;
  }

  // Descript
  public getDescript(): string {
    return this.fields['descript'];
  }
  public setDescript(value: string): void {
    this.fields['descript'] = value;
  }

  // Priority
  public getPriority(): string {
    return this.fields['priority'];
  }
  public setPriority(value: string): void {
    this.fields['priority'] = value;
  }

  // Status
  public getStatus(): string {
    return this.fields['status'];
  }
  public setStatus(value: string): void {
    this.fields['status'] = value;
  }

  // Answer
  public getAnswer(): string {
    return this.fields['answer'];
  }
  public setAnswer(value: string): void {
    this.fields['answer'] = value;
  }

  // Date
  public getDate(): Date | undefined {
    return this.date;
  }
  public setDate(value: Date | undefined): void {
    this.date = value;
  }
}
