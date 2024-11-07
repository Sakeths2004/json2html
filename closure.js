function x(){
    x = 10;
    function y(){
        console.log(x);
    }
    return y;
}

gy = x();
gy();