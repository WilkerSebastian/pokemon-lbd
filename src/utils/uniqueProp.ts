export const getUniqueProperties = <T extends object, U extends object>(obj1: T, obj2: U): Partial<T> => {

    const unique: Partial<T> = {};
  
    for (const key in obj1) {

      if (!(key in obj2))
        (unique as any)[key] = obj1[key];

    }
  
    return unique;

}
  