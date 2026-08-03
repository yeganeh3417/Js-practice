// var arr = [2, 3, 5, 7, 8, 10, 12];

// var maxEven = arr[0];
// var minOdd = arr[1];

// for(var i=0 ; i<arr.length ; i++) {
//    if(arr[i] % 2 === 0) {
//        if(arr[i]>maxEven) {
//            maxEven = arr[i];
//        }
//    }
//    if(arr[i] % 2 !== 0) {
//        if(arr[i]<minOdd) {
//            minOdd = arr[i];
//        }
//    }
// }
// console.log(maxEven);
// console.log(minOdd);



// var arr = [2, 10, 5, 2, 3];

// for (var i = 0 ; i<arr.length ; i++) {
//    var sum = 0;
//    for (var j = 0 ; j<arr.length ; j++) {
//        if (arr[i] === arr[j]) {
//            sum = sum + 1;
//        }
//    }
//    console.log(arr[i] + " -> " + sum);
// }



// function calculate(num1, num2, operation) {
//    if (operation === "+") {
//        return num1 + num2;
//    } else if (operation === "-") {
//        return num1 - num2;
//    }
// }
// console.log(calculate(2, 4, "+"));
// console.log(calculate(2, 4, "-"));



var students = [
    { name: "ali", score: [20, 18, 14, 15] },
    { name: "yeganeh", score: [17, 19, 13, 15] },
    { name: "sara", score: [14, 12, 9, 20] },
];

function average(student) {
    var sum = 0;
    for (var i=0 ; i < student.score.length ; i++) {
        sum += student.score[i];
    }
    return sum / student.score.length;
}

for (var i=0 ; i<students.length ; i++) {
    console.log(students[i].name + ": " + average(students[i]));
}

function getBestStudents(students) {
    var best = students[0];
    var bestAvg = average(best);

    for (var i = 1 ; i<students.length ; i++) {
        var avg = average(students[i]); 
        if (avg > bestAvg) {
            bestAvg = avg;
            best = students[i];
        }
    }
    return best;
}
console.log("best students: " + getBestStudents(students).name);