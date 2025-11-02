import { RequestData } from './model/request-data';
import { LoaderFactory } from './loader/loader-factory';
import { ColumnKey } from '../constants/column-key-relation';
import { RequestMapperFactory } from './model/mapper/request-mapper-factory';

export class RequestsConverter {
  public static async convert(file: File | string, columnKeys: Array<ColumnKey>): Promise<Array<RequestData>> {
    const loader = LoaderFactory.createLoader(file);
    const mapper = RequestMapperFactory.create(file, columnKeys);
    const json = await loader.load();
    const requests: Array<RequestData> = []
    for(const obj of json){
      requests.push(mapper.map(obj as Array<object>));
    }
    return requests
  }
}
