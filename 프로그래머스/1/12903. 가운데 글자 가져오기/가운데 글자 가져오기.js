function solution(s) {
    var answer = ''
    var separate = s.split('').map((str) => str)
    var half = separate.length/2
    var down = separate.length%2
    down === 0 ? answer=separate[half-1]+separate[half]: answer=separate[parseInt(half)]
    return answer
}