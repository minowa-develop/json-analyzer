import { JsonToRecord } from "../../../../utils/json-to-record";
import { RequestData } from "../../request-data";
import { RequestMapable } from "../request-mapable";

export class FileMapper implements RequestMapable {
  public map(json: Array<object>): RequestData {
    const requestData = new RequestData();
    requestData.setFields(JsonToRecord.convert((json as any).fields));

    return requestData;
  }
}
