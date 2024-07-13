let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalary(obj) {
    if (Object.keys(obj).length == 0)
        return "There is no data to calculate.";

    // Solution - 1 ใช้ for-in
    // ========================
    let sum = 0;
    for (let key in obj) {
        sum += +obj[key];
    }

    // Solution-2 ใช้ Object.value
    // ========================
    // let objValue = Object.values(obj);
    // let sum = objValue.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue;
    // });

    if (isNaN(sum))
        return "Cannot calculate due to data type is not Number";
    return `The sum salary = ${sum}`;
}

console.log(sumSalary(salaries));