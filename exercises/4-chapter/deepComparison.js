function deepEqual(obj1, obj2){
    for(let key in obj1){
        if(obj1.hasOwnProperty(key)){
            if(typeof obj1[key] === "object" && obj1[key] !== null){
                //Recursion
                //The if statement helps return the false value from the nested object
                if(!deepEqual(obj1[key], obj2[key])){
                    return false;
                };
            } else if(obj1[key] !== obj2[key]){
                // console.log(obj1[key], obj2[key]);
                return false;
            };
        };
    };

    return true;
};

//TESTS
obj1 = {value: 1, rest: {subValue: 1}};
obj2 = {value: 1, rest: {subValue: 2}};
console.log(deepEqual(obj1, obj1)); //Return True (Same Objects)
console.log(deepEqual(obj1, obj2)); //Return False (Different Objects)