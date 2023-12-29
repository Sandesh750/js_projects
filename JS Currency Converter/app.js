import {countryList} from "./codes.js"
let dropdown = document.querySelectorAll(".dropdown select");
let msg = document.querySelector(".paraResult");
let btn = document.querySelector(".btn");
let amount = document.querySelector(".amount input");
let BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

for (let select of dropdown){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
         if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt)=>{
        getFlage(evt.target);
    })
}

function getFlage(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // console.log(currCode,countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let myamount = amount.value;
    let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let responce = await fetch(URL);
    let data = await responce.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalRate = myamount * rate;

    msg.innerText = `${myamount} ${fromCurr.value} = ${finalRate} ${toCurr.value}`
});




