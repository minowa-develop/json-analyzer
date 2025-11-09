import {createContext} from '@lit/context';
import { RequestData } from './domain/model/request-data';
export const viewModelContext = createContext<Array<RequestData>>('viewmodel');