function solution(price, money, count) {
    for (i=1; i<=count; i++) {
        var last;
        var nowprice = i*price;
        money -= nowprice
        last = money
    } 
        return last<=0 ? last*-1 : 0;
}