let nums=[10,54,1,2,7,9,3,4];
let suma=0;
// salida = 18
for(let i=0; i<nums.length;i++){
    if((nums[i]%2)!=0){
        suma+=nums[i];
    }
}
console.log("Suma="+suma);
