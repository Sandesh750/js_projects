const colors =["green","red","blue","rgb(234,123,032)","#93259F"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    const randomNum = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNum]
    // console.log(randomNum);
    //For Text 
    color.textContent = colors[randomNum];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}