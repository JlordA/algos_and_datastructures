function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}


// place each number in the corresponding bucket based on its kTH digit
// replace our existing array with the values in our buckets starting with 0 and going up to 9
// return list at the end

// define a function that accepts a list of numbers
function radixSort(nums){
    // figure out how many digits the largest number has (mostDigits)
    let maxDigitCount = mostDigits(nums);
    // loop from k = 0 up to the largest number of digits
    for(let k = 0; k < maxDigitCount; k ++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i ++){
            // for each interation of the loop - create buckest for each digit (0 to 9)
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        console.log(nums)
    }
    return nums
}

console.log(radixSort([3424,2,100,1,34,475,222,5,1]))