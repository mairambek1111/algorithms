function isPerfectSquare(num: number): boolean {
    let start: number = 0
    let end: number = num

    while(start <= end){
    const res = Math.floor((start + end) / 2)

    if(res * res === num){
        return true
    }

    if(res * res > num){
        end = res - 1
        continue
    }
    start = res + 1 
    }

    return false
};