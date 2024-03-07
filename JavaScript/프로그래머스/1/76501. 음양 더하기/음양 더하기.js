function solution(absolutes, signs) {
    var sum = 0;
    for (i=0; i<absolutes.length; i++) {
        signs[i] ? sum += absolutes[i] : sum -= absolutes[i]
        console.log(sum)
    }
    return sum;
}