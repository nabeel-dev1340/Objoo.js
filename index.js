import jsObjoo from './Objoo/library.js';

const obj1 = { name: "Nabeel", age: 23 };
const obj2 = { gender: "Male", location: "" };

// Merge two objects
const mergedObj = jsObjoo.mergeObjects(obj1, obj2);
console.log(mergedObj); // { name: 'John', age: 30, gender: 'Male', location: 'USA' }

// Shallow copy an object
const shallowCopyObj = jsObjoo.cloneObject(obj1);
console.log(shallowCopyObj); // { name: 'John', age: 30 }

// Deep copy an object
const deepCopyObj = jsObjoo.deepCopyObject(obj1);
console.log(deepCopyObj); // { name: 'John', age: 30 }

// Filter an object by a condition
const filteredObj = jsObjoo.filterObject(obj1, (value) => value === 23);
console.log(filteredObj); // { age: 30 }

// Convert an object to an array of key-value pairs
const arr = jsObjoo.objectToArray(obj1);
console.log(arr); // [ [ 'name', 'John' ], [ 'age', 30 ] ]

// Get the size of an object
const objSize = jsObjoo.getObjectSize(obj1);
console.log(objSize); // 2

// Check if an object is empty
const isObjEmpty = jsObjoo.isObjectEmpty(obj1);
console.log(isObjEmpty); // false

// Sort an object by key
const sortedByKeyObj = jsObjoo.sortByKey({ b: 2, a: 1, c: 3 });
console.log(sortedByKeyObj); // { a: 1, b: 2, c: 3 }

// Sort an object by value
const sortedByValueObj = jsObjoo.sortByValue({ b: 2, a: 1, c: 3 });
console.log(sortedByValueObj); // { a: 1, b: 2, c: 3 }

// Get a property of an object by its path
const nestedObj = { user: { name: "John", age: 30 } };
const propByPath = jsObjoo.getPropertyByPath(nestedObj, "user.age");
console.log(propByPath); // 30

// Omit properties from an object
const omittedObj = jsObjoo.omit(obj1, ["age"]);
console.log(omittedObj); // { name: 'John' }

// Pick properties from an object
const pickedObj = jsObjoo.pick(obj1, ["age"]);
console.log(pickedObj); // { age: 30 }

// Rename a property of an object
const renamedObj = jsObjoo.renameProperty(obj1, "age", "years");
console.log(renamedObj); // { name: 'John', years: 30 }

// Check if two objects are equal
const isEqual = jsObjoo.areEqual(obj1, { name: "John", age: 30 });
console.log(isEqual); // true
