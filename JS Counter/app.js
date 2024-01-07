const btnadd = document.querySelector(".add");
const btnremove = document.querySelector(".remove");
const btnreset = document.querySelector(".reset");
const msg = document.querySelector(".msg .span");

let counter = 0;
btnadd.addEventListener("click",()=>{
    counter++;
    msg.innerText = counter;
    console.log(counter);
    
})
btnremove.addEventListener("click",()=>{
    counter--;
    msg.innerText = counter;
    
})
btnreset.addEventListener('click',()=>{
    counter = 0;
    msg.innerText = counter;
})











