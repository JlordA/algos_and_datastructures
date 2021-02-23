function search(array, value){
    let min = 0
    let max = array.length -1
    while(min < max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if(array[middle] < value){
            min = middle + 1
        } else if (array[middle] > value){
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

console.log(search([1,2,3,4,15,16,17,32,35,44,56,77,100], 77))