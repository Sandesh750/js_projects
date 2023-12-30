const modalBtn = document.querySelector(".modal_btn");
const modal = document.querySelector(".modal_overlay")
const colseBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click",function(){
    modal.classList.add("open_modal");
});
colseBtn.addEventListener("click", function(){
    modal.classList.remove("open_modal");
});