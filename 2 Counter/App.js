let count=0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value') 

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const styles = e.currentTarget.classList;
    // console.log(styles)
    if(styles.contains('decrement')){
       count--;
    }
    else if(styles.contains('increment')){
      count++;
    }
    else{
        count=0;
    }
    if(count>0){
      value.style.color="green";
    }
    if(count<0){
      value.style.color="red";
    }
    if(count===0){
      value.style.color='#222'
    }
    value.textContent=count;
    // console.log(count);
  })
})

