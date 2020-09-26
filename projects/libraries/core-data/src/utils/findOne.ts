import { selectObjectKeys } from "./selectObjectKeys";

export interface FindOne<T> {
  where: (object: T) => boolean;
  select?: (keyof T)[];
}

export function findOne<T>(array: T[], options: FindOne<T>) {
  let result: T = {} as T;
  if (options) {
    if ("where" in options) result = array.find(options.where);
    if ("select" in options)
      result = selectObjectKeys<T>(result, options.select);
    return result;
  } else {
    return result;
  }
}
