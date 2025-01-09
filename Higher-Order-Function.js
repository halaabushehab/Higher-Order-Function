//Q1:
//===========================for=================================

function ArrayFunctionfor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.pow(2, arr[i]));
  }
  return result;
}
console.log(ArrayFunctionfor([5, 7, 3]));

//===========================forEach=================================
function ArrayFunctionforEach(arr) {
  let result_forEach = [];
  arr.forEach((number) => {
    result_forEach.push(Math.pow(2, number));
  });

  return result_forEach;
}
console.log(ArrayFunctionforEach([5, 5, 5]));
//===========================Map=================================
function ArrayFunctionMap(arr) {
  const result_Map = arr.map((number) => {
    result_Map.push(Math.pow(2, number));
  });
  return result_Map;
}
console.log(ArrayFunctionforEach([1, 1, 1]));


//Q2:

function evenOddFunction(arr){
 const result1=arr.map((element)=>{
if(typeof(element) ==="string"){
    return  "N/A"
}
else if(element % 2 === 0  ){
    return "even"
}
else{
    return "odd";
}
})
return result1;
}
console.log(evenOddFunction([5, 6, 0, "hala"]));


//Q3:
 let array=["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"]; 
 let NewArray=[];
 function Names(){
    array.forEach((singleName)=>{
     NewArray.push(singleName);
    })
    return NewArray;
}

console.log(Names(array))



//Q4:

function fizzbuzz(arr){
fizzbuzz_Result=arr.map((numbeer)=>{
 if (numbeer % 5 === 0 && numbeer % 3 ===0){
        return  "Fizz Buzz"
     
    }
else if( numbeer%3 === 0){
   return  "Fizz"
}
else if(numbeer %5 === 0){
    return  "Buzz"

}

else{
    return numbeer;
}

})
return fizzbuzz_Result;
}
console.log(fizzbuzz([30,2,7,6,10,9,1,15]));