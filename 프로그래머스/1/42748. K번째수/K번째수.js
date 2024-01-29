function solution(array, commands) {
    var sorted = [];
    var answer = [];
    var middle = [];
    for (i=0; i<commands.length; i++){
        sorted = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b)
        console.log(sorted)
        middle = sorted[commands[i][2]-1]
        console.log(middle)
        answer = answer.concat(middle)
    }
    return answer;
}