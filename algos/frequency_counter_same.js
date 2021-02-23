// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     } else {
//         for (i = 0; i < arr1.length; i++){
//             let correctIndex = arr2.indexOf(arr1[i] **2)
//             if (correctIndex === -1){
//                 return false
//             }
//             console.log(arr2)
//             arr2.splice(correctIndex,1)
//         }
//         return true
//     }
// }


// FREQUECY COUNTER
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    } else {
        // frequency counter objects show contents of an array
        let frequencyCounter1 = {}
        let frequencyCounter2 = {}
        // breaks down contents of arr1
        for(let value of arr1){
            frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
        }
        // breaks down contents of arr2
        for(let value of arr2){
            frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
        }
        //compares the contents of arr1 to arr2
        for(let key in frequencyCounter1){
            if(!(key ** 2 in frequencyCounter2)){
                return false
            } else if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
                return false
            }
            return true
        }
    }
}


console.log(same([1,2,3], [1,4,9]))