function reverseArray(array){
    let copyArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        copyArray.push(array[i]);
    };

    console.log(copyArray, array);
    return copyArray;
};

function reverseArrayInPlace(array){
    let left = 0;
    let right = array.length - 1;

    //Swap Method
    while(left < right){
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;

        left++;
        right--;
    };

    console.log(array);
    return array;
};

//TESTS
reverseArray(["C", "B", "A"]);
reverseArray([1, 2, 3, 4, 5]);

reverseArrayInPlace([1, 2, 3, 4, 5, 6]);