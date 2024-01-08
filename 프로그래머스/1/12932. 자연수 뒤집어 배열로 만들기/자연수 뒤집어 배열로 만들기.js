function solution(n) {
    const answer = String(n).split('').map(data=>Number(data)).reverse()
    return answer;
}