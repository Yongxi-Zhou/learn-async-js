const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];


function findNegative(arr, rowIndex) {
    return new Promise((resolve, reject) => {
        if (arr.length < rowIndex) {
            setTimeout(() => {
                let neg = False;
                for (let i = 0; i < arr[rowIndex].length; i ++) {
                    if (arr[rowIndex][i] < 0) {
                        neg = True;
                    }
                } if (neg) {
                    resolve(rowIndex);
                } else {
                    resolve("no negatives");
                }
            }, 0);
        }
        else {
            reject(`Row Index ${rowIndex} must be within 0 and ${arr.length}`)
        }
    })
}

negPromises = [];
for (let x = 0; x < array2D.length; x++) {
    negPromises.push(findNegative(array2D, x))
}

Promise.all(negPromises)
    .then((negs) => {
        let rows = []
        negs.forEach(item => {
            rows.push(item) })
        console.log(`Sum = ${sum}`)
    })
    .catch((error) => console.log(`Error: ${error}`));