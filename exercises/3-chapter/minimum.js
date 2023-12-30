function minimum(num1, num2){
    if(num1 < num2){
        return num1;
    };

    return num2;
};

//TESTS
console.log(minimum(0, 10)); //Return 0
console.log(minimum(0, -10)); //Return -10