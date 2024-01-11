function solution(x) {
    var j=x.toString().split('').map((str) => Number(str));
    k=0;
    for (i=0; i<j.length; i++) {
        k += j[i];}
        return x%k===0 ? true:false}
