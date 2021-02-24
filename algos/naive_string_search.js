
//long version
// function stringSearch(string, subString) {
//     let count = 0
//     for (let i = 0; i < string.length; i++){
//         for (let y = 0; y < subString.length; y++){
//             console.log(subString[y], string[i+y])
//                 if (subString[y] !== string[i+y]){
//                     console.log("Break")
//                     break;
//                 }
//                 if (y === subString.length -1){
//                     console.log("Found One")
//                     count ++;
//                 }
//             }
//         }   
//     return count;
// }

// short version
function stringSearch(string, subString) {
    let count = 0
    for (let i = 0; i < string.length; i++){
        for (let y = 0; y < subString.length; y++){
                if (subString[y] !== string[i+y]) break;
                if (y === subString.length -1) count ++;
            }
        }   
    return count;
}
console.log(stringSearch("wowomgomg", "omg"))