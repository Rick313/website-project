import { selectObjectKeys } from "./selectObjectKeys";

export interface findManyOptions<T> {
  select?: (keyof T)[];
  take?: number;
  skip?: number;
  where?: (object: T) => boolean;
  order?: (a: T, b: T) => number;
}

export function findMany<T>(array: T[], options: findManyOptions<T>) {
  let result: T[] = array;
  if (options) {
    if ("select" in options)
      result = result.map((data) => selectObjectKeys<T>(data, options.select));
    if ("where" in options) result = result.filter(options.where);
    if ("skip" in options) result = result.slice(options.skip, result.length);
    if ("take" in options) result = result.slice(0, options.take);
    if ("order" in options) result = result.sort(options.order);
    return result;
  } else {
    return result;
  }
}
