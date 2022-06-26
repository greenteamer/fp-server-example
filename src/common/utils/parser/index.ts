import { getObjKeys, getObjValues } from "../helpers";

export const testParserObj = {
  api: {
    vehicles: {
      makes: () => ["make1", "make2", "make3"],
      manufacturers: () => ["manufacturer1", "manufacturer2"],
    },
    stores: {
      allStores: () => 3,
      getStore: () => 4,
    },
  },
  apiV2: {
    start: () => "start endpoint",
  },
};

export class ParseContainer<T, K extends keyof T> {
  readonly _tag = "ParseContainer";
  readonly initial: T;
  readonly keys: K;
  readonly values: Array<T[K]>;
  readonly ex: Array<
    T[K] extends (...args: any[]) => any
      ? T[K]
      : ParseContainer<T[K], keyof T[K]>
  >;
  constructor(initial: T) {
    this.initial = initial;
    this.keys = getObjKeys(initial);
    this.values = getObjValues(initial);
    this.ex = this.values.map((i: any) =>
      typeof i === "function" ? i : new ParseContainer(i)
    );
  }
}
