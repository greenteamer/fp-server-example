export const getObjKeys = <T, K extends keyof T>(obj: T): K => {
  return Object.keys(obj) as unknown as K;
};

export const getObjValues = <T, K extends keyof T>(obj: T): Array<T[K]> => {
  return Object.values(obj);
};
