function flatten(arrays){
    let result = arrays.reduce( (accumulator, element) => {
        return accumulator.concat(element);
    });

    return result;
};

//TEST(S)
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays)); //Returns [1, 2, 3, 4, 5, 6]