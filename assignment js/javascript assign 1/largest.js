var array  = [3,4,5,6,7,8,9];
// console.log(Math.max(...array));
const largestno = (values)=>{
let max = 0;
for(let i=0; i<array.length;i++){
    if(values[i]>max){
     max = values[i];   
    }
}
return max;
}
console.log(largestno(array));