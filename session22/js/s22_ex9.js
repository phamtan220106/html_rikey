let A=[1,1,3,4,4,5,5,6,6,1,2];
for (let i = 0; i < A.length; i++) {
    for (let j = A.length - 1; j > i; j--) {
        if (A[j] === A[i]) {
            A.splice(j, 1);
        }
    }
}
let t=A.sort();
alert(t);