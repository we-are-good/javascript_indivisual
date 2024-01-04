function solution(arr) {
    let j=0;
    for (i=0; i<arr.length; i++){
        j += arr[i]
    }
    let answer =j/arr.length
    return answer;
}