import { RequestData } from "../request-data";

export interface RequestMapable {
  map(json: Array<object>): RequestData;
}
