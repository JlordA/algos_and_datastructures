function countUniqueValues(arr) {
    if(arr.length === 0) return 0
    let pointer1 = 0
    // let count = 0
    for (let pointer2 = 1; pointer2 <arr.length; pointer2 ++) {
        if (arr[pointer1] !== arr[pointer2]) {
            pointer1 ++
            arr[pointer1] = arr[pointer2]
            // return count + 1
        } 
        // console.log(pointer1, pointer2)
    }
    return pointer1 + 1
}

console.log(countUniqueValues([1, 1, 1, 3, 5, 5, 6, 9, 33, 33, 35 ]))