// main.js
let counter, btnAdd;
let n;

function addCount()
{
    if(n>=20) n=0;
    n++;
    if(n%15===0)
    counter.innerHTML = "FizzBuzz";
    else if(n%3===0)
    counter.innerHTML = "Fizz";
    else if(n%5===0)
    counter.innerHTML = "Buzz";
    else
    counter.innerHTML = n;
}

window.addEventListener("load", ()=>
{
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n = 0;

    btnAdd.addEventListener("click", addCount);
});
