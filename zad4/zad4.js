function sum(arr)
{
    let result=0;
    arr.forEach((value)=>{
       result = result +value;
    })
    return result;
}

console.log(sum([1,2,3,4,5]));