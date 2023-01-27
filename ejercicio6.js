let nums=[12,14,5,7];
let suma=0;
// salida 19
for(let i=0; i<nums.length;i++){
    if(nums[i]%7!=0){
        suma+=nums[i];
    }
}
console.log("suma multiplos 7 ="+suma);

