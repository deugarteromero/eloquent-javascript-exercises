function listToArray(array){
    let nestedObjects = {};
    let tempObjects = {};
    for(let i = array.length - 1; i >= 0; i--){
        tempObjects.value = array[i];
        if(i === array.length - 1){
            tempObjects.rest = null;
            nestedObjects = tempObjects;
            tempObjects = {};
            // console.log(nestedObjects, tempObjects);
        } else {
            console.log(nestedObjects);
            tempObjects.rest = nestedObjects;
            nestedObjects = tempObjects;
            tempObjects = {};
            // console.log(nestedObjects, tempObjects);
        };
        // console.log(i);
    };
    console.log(nestedObjects);
};

//TESTS
listToArray([1, 2, 3]); //Converts to Nested Objects
                        //Result: {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}