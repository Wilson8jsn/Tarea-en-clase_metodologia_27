let nums=[12,3,5,7];
let suma=0;
// salida 15
for(let i=0; i<nums.length;i++){
    if(nums[i]%3==0){
        suma+=nums[i];
    }
}
console.log("suma multiplos="+suma);

