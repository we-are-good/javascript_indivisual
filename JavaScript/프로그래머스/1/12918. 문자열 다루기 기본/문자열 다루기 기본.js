function solution(s) {
    let res=s.split("")
    console.log(res)
    if (res.length !==4 && res.length !==6) {return false}

    for (i=0; i<res.length; i++)
    { if (isNaN(res[i]) && res[i] !==0) { return false}
    }
    return true}