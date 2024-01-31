function solution(numbers) {
    var answer = 0;
    for (i=0; i<numbers.length; i++) {
        answer+=numbers[i];
    }
    if (answer%numbers.length===0||0.5) { return answer/numbers.length
    }
    return Math.floor(answer/numbers.length);
}