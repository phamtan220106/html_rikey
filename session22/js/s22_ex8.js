let A = [2, 3, 4, 3, 3, 3, 6, 4, 5, 3,1,1,1,1,1,1,1,1,1];
let count = 0;
let max = 0;
let mincount = null;
let t = [...A];

for (let i = 0; i < A.length; i++) {
    for (let j = A.length - 1; j > i; j--) {
        if (A[j] === A[i]) {
            A.splice(j, 1);
        }
    }
}

for (let i = 0; i < A.length; i++) {
    count = 0;
    for (let j = 0; j < t.length; j++) {
        if (A[i] === t[j]) {
            count++;
        }
    }

    if (count > max) {
        max = count;
        mincount = A[i];
    } else if (count === max && A[i] < mincount) {
        mincount = A[i];
    }
}

alert(mincount);
