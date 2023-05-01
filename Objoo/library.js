const jsObjoo = {
  mergeObjects: (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  },

  // Shallow Copy
  cloneObject: (obj) => {
    return { ...obj };
  },

  deepCopyObject: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },

  filterObject: (obj, isValid) => {
    return Object.keys(obj)
      .filter((key) => isValid(obj[key]))
      .reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {});
  },

  objectToArray: (obj) => {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  },

  getObjectSize: (obj) => {
    return Object.keys(obj).length;
  },

  isObjectEmpty: (obj) => {
    return Object.keys(obj).length === 0;
  },

  sortByKey: (obj) => {
    const sorted = {};
    Object.keys(obj)
      .sort()
      .forEach((key) => {
        sorted[key] = obj[key];
      });
    return sorted;
  },

  sortByValue: (obj) => {
    const sorted = {};
    Object.entries(obj)
      .sort((a, b) => a[1] - b[1])
      .forEach(([key, value]) => {
        sorted[key] = value;
      });
    return sorted;
  },

  getPropertyByPath: (obj, path) => {
    const props = path.split(".");
    let result = obj;
    for (let prop of props) {
      result = result[prop];
      if (result === undefined) {
        return undefined;
      }
    }
    return result;
  },

  omit: (obj, propsToOmit) => {
    const result = {};
    for (let prop in obj) {
      if (!propsToOmit.includes(prop)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  },

  pick: (obj, propsToPick) => {
    const result = {};
    for (let prop of propsToPick) {
      if (obj.hasOwnProperty(prop)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  },

  renameProperty: (obj, oldProp, newProp) => {
    if (oldProp === newProp) {
      return obj;
    }
    if (obj.hasOwnProperty(oldProp)) {
      obj[newProp] = obj[oldProp];
      delete obj[oldProp];
    }
    return obj;
  },

  areEqual: (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  },
};

export default jsObjoo;
