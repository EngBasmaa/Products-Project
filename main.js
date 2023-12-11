const buy=document.querySelectorAll(".js_buy ")
const finish=document.querySelectorAll(".js_finish")
const container=document.getElementById("container")
const big=document.getElementById("big_container")
const dele= document.getElementById("dele")

// console.log(buy)

// for all buttons: (buy)
buy.forEach(item => {
    item.addEventListener("click", (eo) => {
        eo.preventDefault()
        big.classList.add("active")
        dele.style.display="none"
    })
});

// for all buttons: (finish)

finish.forEach(item => {
    item.addEventListener("click",(eo) => {
        dele.style.display="block"
        container.style.display="none"
    
        setTimeout(() => {
            dele.style.display="none"
            big.classList.remove("active")
        }, 2000);
    
    })
});


const mode=document.getElementById("mode")
const body=document.getElementById("body")
const header=document.getElementById("body")
const footer=document.getElementById("body")
const main=document.getElementById("main")
const h1=document.querySelectorAll("h1")
const section=document.querySelectorAll(".section")

mode.addEventListener("click", (eo) => {
    body.classList.toggle("dark")
    main.classList.toggle("dark")
    header.classList.toggle("dark")
    footer.classList.toggle("dark")

})



