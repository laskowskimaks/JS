function fibonnaci(n){
    let arr = [];
    
    arr.push(0);
    if(n == 1) return arr;
    arr.push(1); 
    if(n == 2) return arr;

    for(let i = 2; i < n; i++)
    {
        fib = arr[i-2] + arr[i-1];
        arr.push(fib);
    }
    return arr;
}

console.log(fibonnaci(10));