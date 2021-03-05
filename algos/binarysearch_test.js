function solve(n){
        let nArray = []
        for (let i = 1; i <= n; i++){
            let num = i.toString()
            if (num.includes("3") || num.includes("6") || num.includes("9") || i % 3 === 0){
                nArray.push("clap")

            } else {
                nArray.push(num)
            }
        }
        return nArray
}

console.log(solve(0))