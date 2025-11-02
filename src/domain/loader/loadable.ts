export interface Loadable {
  load(): Promise<Array<object>>
}
