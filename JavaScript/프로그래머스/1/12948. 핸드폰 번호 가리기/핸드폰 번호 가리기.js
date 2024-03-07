function solution(phone_number) {
    var se=phone_number.split('')
    var phone_length = se.length
    var lastFour = se.splice(-4,4).join("")
    var stars=se.map((str)=>"*").join("")
    return stars+lastFour
    }