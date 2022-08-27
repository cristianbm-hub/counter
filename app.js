//set initial count
let count = 0

//select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')



btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        //btn classes
        const styles = e.currentTarget.classList
        
        //set count
        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('reset')){
            count=0
        }else if(styles.contains('increase')){
            count++
        }

        //Color of value
        if(count<0){
            value.style.color = "red"
        } else if(count>0){
            value.style.color = "green "
        } else{
            value.style.color = "#222"
        }
        //set value
        value.textContent = count
    })
})
