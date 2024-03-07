function solution(arr, divisor) {
    var answer = [];
    for (i=0; i<arr.length; i++) {
        arr[i]%divisor === 0 ? answer.push(arr[i]) : null
    }
    if (answer.length===0) return [-1];
    answer.sort((a, b) => a-b)
    return answer;
}