//if array, pass elements through callback
//if object, pass elements through callback
//return original
function myEach(collection, callback) {
    if (collection instanceof Array === true) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], Object.keys(collection)[i], collection);
        }
    }
    return collection;
}

//create new empty array
//if array, iterate elements into new array
//if object, iterate elements into new array
//return new array
function myMap(collection, callback) {
    let newCollection = [];
    if (collection instanceof Array === true) {
        for (let i = 0; i < collection.length; i++) {
            newCollection.push(callback(collection[i], i, collection));
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            newCollection.push(callback(values[i], Object.keys(collection)[i], collection));
        }
    }
    return newCollection;
}

//if object, add elements
//if no acc, start at first element
//for each element, iterate through
function myReduce(collection, callback, acc) {
    if (collection instanceof Array === false) {
        collection = Object.values(collection);
    }
    let newAccum = acc;
    let x = 0;
    if (acc === undefined) {
        newAccum = collection[0];
        x = 1;
    }
    for (let i = x; i < collection.length; i++) {
        newAccum = callback(newAccum, collection[i], collection)
    }
    return newAccum;
}

//if array, iterate through seeking element
//if object, iterate through seeking element/value
function myFind(collection, predicate) {
    if (collection instanceof Array === true) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i], Object.keys(collection)[i], collection)) {
                return values[i];
            }
        }
    }
}

//create new array
//if array, iterate through creating new collection with single element
//if object, iterate through creating new collection with single element
//return new
function myFilter(collection, predicate) {
    let newCollection = [];
    if (collection instanceof Array === true) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                newCollection.push(collection[i]);
            }
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i], Object.keys(collection)[i], collection)) {
                newCollection.push(values[i]);
            }
        }
    }
    return newCollection;
}

//if array, return # of elements
//if object, return # of keys
function mySize(collection) {
    if (collection instanceof Array === true) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    } else {
        return 0;
    }
}

//retrieve all keys
function myKeys(object) {
    return Object.keys(object);
}

//retrieve all values
function myValues(object) {
    return Object.values(object);
}