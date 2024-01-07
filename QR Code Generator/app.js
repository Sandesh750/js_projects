let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let mywebsite = document.querySelector(".input");
let btn = document.querySelector(".btn");
let qrCodeImg = document.querySelector(".qrimg");

btn.addEventListener('click',async ()=>{
    // Type 1

    // let texturl = mywebsite.value;
    // let responce = await fetch(`${url}${texturl}`);
    // let blob = await responce.blob();
    // qrCodeImg.src = URL.createObjectURL(blob);


    // Type 2
    
    let responce = await fetch(`https://quickchart.io/qr?text=${mywebsite.value}&light=5830fc&dark=ffffff&ecLevel=H&margin=1&size=200`);
    let blob = await responce.blob();
    qrCodeImg.src = URL.createObjectURL(blob);
})
