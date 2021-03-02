// repeat this with the  next element until the array is sorted

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // store the first element as the smallest value you've seen so far
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // compare this item to the next item in the array until you find a smaller number
            if (arr[j] < arr[min]) {
                // if smaller number is found, designate that smaller number to be the new "minimum"
                // and continue until the end of the array
                min = j;
            }
        }
        // if the minimum is NOT the value (index) you initially began with, swap the two values
        if (i !== min) {
            console.log(i, min)
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([0,1,34, 22, 10, 19, 17]))