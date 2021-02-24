// my first attempt where the if conditional is confusing

// function linearSearch(arr, num){
//     if(!(arr.includes(num))) return -1;
//     for(let i = 0; i < arr.length; i++){
//         if(i = num){
//             return arr.indexOf(i);
//         }
//     }
// }

function linearSearch(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1
}

console.log(linearSearch([34,22,1,4,5,77,8], 5))