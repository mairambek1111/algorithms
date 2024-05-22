function checkRecord(s: string): boolean {
    let a: number = 0 
    let l: number = 0

    for(let i: number = 0; i <  s.length; i++){
        if(s[i] === "A"){
            a++
        }
        if(s[i] === 'L'){
            l++
        }else {
            l = 0
        } if( a > 1 || l > 2 ){
            return false 
        }
    }
    return true
};