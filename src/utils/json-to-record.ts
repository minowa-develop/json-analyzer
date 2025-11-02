export class JsonToRecord {
  public static convert(obj: object): Record<string, string> {
    const record: Record<string, string> = {};
    for (const [key, value] of Object.entries(obj)) {
      record[key] = value;
    }
    return record;
  }
}
