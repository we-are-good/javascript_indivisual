function solution(numbers) {
    var answer = [];
    var sum =[];
    var ref = numbers.map((num) => num);
    for (j=0; j<numbers.length-1; j++){
    for (i=j+1; i<numbers.length; i++) {
        sum.push(ref[i]+ref[j])

    }}
    sum.filter((element) => {if(!answer.includes(element)) {answer.push(element)}})
    return answer.sort((a, b) => a-b)
}