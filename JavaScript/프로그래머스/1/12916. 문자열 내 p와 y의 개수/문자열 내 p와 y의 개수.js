function solution(s){
    const uppercaseS=s.toUpperCase()
    const slicedS = uppercaseS.split("")
    let pcounts=0
    let ycounts=0
    for(let i=0; i<slicedS.length; i++){
    slicedS[i] === "P" ? pcounts+=1: slicedS[i] === "Y" ? ycounts+=1 : null
    if(i===slicedS.length-1){
        if(pcounts=== 0&&ycounts === 0) {return true}
        if(pcounts === ycounts) {return true}
        return false}
    }
}