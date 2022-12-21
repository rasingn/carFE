const myList = [1,2]
const myList2 = [...myList,5,6]
console.log(myList);
console.log(myList2);
x(1,2,3,4,5)
function x(...args){
args.map((val,key)=>{
console.log(`${val} at ${key}`);
})
}