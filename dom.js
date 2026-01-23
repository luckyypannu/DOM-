const para = document.getElementsByClassName("para")
para[0].innerText = "this is a new paragraph"
para[1].innerText = "hi guys!!"
// para[0].style.color = "green"
// para[1].style.color = "red"
console.log(para)
console.log("Hello")

for(let i=0;i<para.length;i++){
    para[i].style.color = "green"
}

// const abc = document.querySelector(".abc")
// abc.innerText = "1234"

const abc = document.querySelectorAll(".abc")
abc[0].innerText = "12345"
abc[1].innerText = "1213456"

const container = document.querySelector(".container")
container.innerHTML = "<h1>dom class</h1>"

// function message(event)
// {
//     console.log(event.key)
// }
// {alert("you have clicked the button")}   


// const btn = document.querySelector("button")
// btn.classList.add("btn")

// btn.addEventListener('keydown',message)

// btn.addEventListener('mouseover',message)
// btn.removeEventListener('mouseover',message)
// btn.addEventListener("mouseover",function(){alert("you have clicked the button")})

// const form = document.querySelector("form")
// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     console.log("form submitted")
// })


// console.log (b)

// let  a = 2345
// var b= 5678

// console.log(a)
// console.log(b)

// function print(){
//     console.log("inside fn")
// }

// print()

function first(){
    second()
}

function second(){
    third()
}

function third(){
    console.trace()
}

first()

// function infinite(){
//     infinite()
// }

// infinite()

let total = 40

function calculate(){
    console.log(total)
    let total = 100
}

calculate()

    

    
