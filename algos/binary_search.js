// long version
// function binarySearch(arr, num){
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2)
//     while(arr[middle] !== num && start < end){
//         if(num < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2)
//     }
//     if(arr[middle] === num){
//         return middle;
//     }
//     return -1
// }

function binarySearch(arr, num){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)
    while(arr[middle] !== num && start < end){
        if(num < arr[middle])end = middle - 1; 
        else start = middle + 1;
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === num ? middle : -1
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 28))