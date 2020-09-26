export function selectObjectKeys<T = object>(object: T, keys: (keyof T)[]) {
  const result = {} as T;
  for (const key of Object.keys(object)) {
    if (keys.includes(key as keyof T)) {
      result[key] = object[key];
    }
  }
  return result;
}
