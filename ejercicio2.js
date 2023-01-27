let nums=[10,54,1,2,7,9,3,4];
let suma=0;
// salida = 70
for(let i=0; i<nums.length;i++){
    if((i%2)==0){
        suma+=nums[i];
    }
}
console.log("Suma Indices Pares="+suma);
