const fibonacci = function(n) {
    let num=parseInt(n)
    if (isNaN(num)|| num<0){
        return `OOPS`
    }
    let prevnum1=1
    let prevnum2=1
    let currentnum=1
    for(i=2;i<num;i++){
        currentnum=prevnum1+prevnum2;
         prevnum1=prevnum2
         prevnum2=currentnum
    }
    return currentnum;
    };
    
    // Do not edit below this line
    module.exports = fibonacci;
    