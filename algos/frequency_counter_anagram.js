function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    } else {

        let lookup = {}

        for(let value of str1){
            lookup[value] ? lookup[value] += 1 : lookup[value] = 1
        }

        for(let value of str2){
           if(!(lookup[value])){
                return false
            } else {
                lookup[value] -= 1
            }
        }
        return true
    }
}

console.log(anagram("cat", "tbc"))