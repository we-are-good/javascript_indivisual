function solution(n)
{
    var answer = 0;
    let j=0;
    let sep = n.toString().split('');
    for (i=0; i<sep.length; i++) {
        answer+= Number(sep[i])
    }
    return answer;    
}