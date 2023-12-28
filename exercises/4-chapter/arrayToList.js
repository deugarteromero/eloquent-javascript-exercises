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

//TESTS
arrayToList([1, 2, 3]); //Converts to Nested Objects
                        //Result: {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
listToArray(arrayToList([1, 2, 3])); //Converts Back to Array
                                     //Result: [1, 2, 3];
console.log(listToArray(arrayToList([1, 2, 3])));