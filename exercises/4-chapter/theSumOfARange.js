function range(start, end, step = 1){
    let numberList = [];

    if(step > 0){
        for(let i = start; i <= end; i += step){
            numberList.push(i);
        };
    } else {
        for(let i = start; i >= end; i += step){
            numberList.push(i);
        };
    };

    // console.log(numberList);
    return numberList;
};

function sum(array){
    let summation = 0;

    //Is summation possible?
    if(!array.length){
        console.error("Invalid Arguments. Summation Not Possible.");
    } else {
        for(let i = 0; i < array.length; i++){
            summation += array[i];
        };

        console.log(summation);
        return summation;
    };
};

//TESTS
sum(range(1, 10, 1));
sum(range(5, 1, -1));
sum(range(1, 5, -1));
