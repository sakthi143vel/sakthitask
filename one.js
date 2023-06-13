total=0;
function sum(...args){
    return args.reduce((total,args)=>total+args)
}
console.log(sum(4,5));
console.log(sum(6));
console.log(sum(3));
console.log(sum(1));

