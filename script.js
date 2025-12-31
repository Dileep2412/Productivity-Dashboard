function openFeatures(){
var allElems = document.querySelectorAll(".elem")
var fullElemPage = document.querySelectorAll(".fullelem")
var fullElemPageBtn = document.querySelectorAll(".fullelem .back")

allElems.forEach(function(elem){
        elem.addEventListener("click",function(){
          fullElemPage[elem.id].style.display ="block"
        })
})

fullElemPageBtn.forEach(function(back){
    back.addEventListener("click",function(){
        fullElemPage[back.id].style.display ="none"
    })
})
}
openFeatures()

let form = document.querySelector(".addtask form")
let taskInput = document.querySelector(" .addtask form #task-input")
let taskDetailsInput = document.querySelector(" .addtask form textarea")
let taskCheckbox = document.querySelector(" .addtask form #check")

let currentTask=[
    {
    task:"Mandir jao",
    details:"Hanuman ji ke mandir",
    imp:true
    },
    {
    task:"Mandir jao",
    details:"Hanuman ji ke mandir",
    imp:true
    },
    {
    task:"Mandir jao",
    details:"Hanuman ji ke mandir",
    imp:true
    },
]
// form.addEventListener("submit",function(e){
//     e.preventDefault()

//     console.log(taskInput.value);
//     console.log(taskDetailsInput.value)
//     console.log(taskCheckbox);

// })

function rendertask(){
    let alltask = document.querySelector(".alltask")
    let sum =''
    currentTask.forEach(function(elem){
     sum = sum+` <div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span> </h5>
                        <button>Mark as completed</button>
                    </div>`

})
alltask.innerHTML=sum;
}
