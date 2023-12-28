function arrayToList(array){
    let nestedObjects = {};
    let tempObjects = {};

    for(let i = array.length - 1; i >= 0; i--){
        tempObjects.value = array[i];
        i === array.length - 1 ? tempObjects.rest = null : tempObjects.rest = nestedObjects;
        nestedObjects = tempObjects;
        tempObjects = {};
    };

    // console.log(nestedObjects);
    return nestedObjects;
};

function listToArray(list, array = []){
    for(let key in list){
        if(list.hasOwnProperty(key)){
            if(typeof list[key] === "object" && list[key] !== null){
                //Call Again for Next Nested Object
                listToArray(list[key], array);
            } else if(key === "value"){
                array.push(list[key]);
            };
        };
    };

    // console.log(array); Logs 3 Times, Must be Outside of Function
    return array;
};

//Helper Function
function prepend(element, list){
    let newList = {};
    newList.value = element;
    newList.rest = list;

    return newList;
};

function nth(list, number){
    let i = 0;
    let object = list;
    //Object Updates with the Next Rest Value; No Equal to Identify Correct Value
    while(object !== null && i < number){
        object = object.rest; //Replace/Update object
        i++;
    };

    return object ? object.value : undefined;
};

//TESTS
arrayToList([1, 2, 3]); //Converts to Nested Objects
                        //Result: {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
listToArray(arrayToList([1, 2, 3])); //Converts Back to Array
                                     //Result: [1, 2, 3];
console.log(listToArray(arrayToList([1, 2, 3])));

console.log(prepend(10, null)); //Result: {value: 10, rest: null}
console.log(prepend(10, prepend(20, null))); //Result: {value: 10, rest: {value: 20, rest: null}}
                                             //Multiple Prepend Calls

console.log(nth(arrayToList([1, 2, 3]), 1)); //Return 2
