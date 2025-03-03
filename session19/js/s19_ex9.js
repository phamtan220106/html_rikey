function testResults() {
    let result1 = "javascript" + 5;
    document.write(`"javascript" + 5 = ${result1} <br>`);
    // "javascript5"

    let result2 = "javascript" - 1;
    document.write(`"javascript" - 1 = ${result2} <br>`);
    // NaN

    let result3 = "3" + 2;
    document.write(`"3" + 2 = ${result3} <br>`);
    // "32"

    let result4 = "5" - 4;
    document.write(`"5" - 4 = ${result4} <br>`);
    // 1

    let result5 = isNaN("123");
    document.write(`isNaN("123") = ${result5} <br>`);
    // false

    let result6 = isNaN("hello");
    document.write(`isNaN("hello") = ${result6} <br>`);
    // true

    let result7 = Number.isNaN("123");
    document.write(`Number.isNaN("123") = ${result7} <br>`);
    // false

    let result8 = Number.isNaN(NaN);
    document.write(`Number.isNaN(NaN) = ${result8} <br>`);
    // true
}

testResults();
