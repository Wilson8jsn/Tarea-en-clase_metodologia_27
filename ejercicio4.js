let nums=[1,1,0,0];
let suma=0;
// salida 5
for(let i=0; i<nums.length;i++){
    if(nums[i]==0){
        suma+=i;
    }
}
console.log("suma ="+suma);
