let nums=[8,54,4,17,19,10,2];
let suma=0;

for(let i=0; i<nums.length;i++){
    if(nums[i]>10){
        suma+=nums[i];
    }
}
console.log("suma mayor a 10 ="+suma);
