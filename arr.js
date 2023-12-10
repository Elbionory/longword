const arr = ["banana", "apple", "tree", "car", "IEEE", "aswan"];
let biggest;

function findBiggest(...arr) {
    biggest = arr[0]; 
    if (arr.length === 0) { 
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= biggest.length) { 
                biggest = arr[i];
            }
        }
        return biggest;
    }
}

console.log(findBiggest(...arr));//output should be banana