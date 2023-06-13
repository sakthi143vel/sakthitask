let even = "";
let odd = "";

for (let i = 2; i < 10; i += 2) {
    even += " the even number is" + i + "<br>"
}
console.log(even);
document.getElementById("demo1").innerHTML = even;


for (let j = 1; j < 10; j += 2) {
    odd += "the odd number is " + j + "<br>"
}
console.log(odd);
document.getElementById("demo2").innerHTML = odd;

