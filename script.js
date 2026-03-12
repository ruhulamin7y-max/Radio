let questions=[]
let index=0
let score=0
let time=60

fetch(API)
.then(res=>res.json())
.then(data=>{
questions=data
load()
})

function load(){

let q=questions[index]

document.getElementById("quiz").innerHTML=`

<h3>${q[0]}</h3>

<button onclick="check('A')">${q[1]}</button>
<button onclick="check('B')">${q[2]}</button>
<button onclick="check('C')">${q[3]}</button>
<button onclick="check('D')">${q[4]}</button>

`

}

function check(ans){

if(ans==questions[index][5]){

score++

}

}

function next(){

index++

if(index<questions.length){

load()

}else{

finish()

}

}

function finish(){

localStorage.setItem("score",score)

window.location="result.html"

}

setInterval(()=>{

time--

document.getElementById("timer").innerText="Time:"+time

if(time==0){

finish()

}

},1000)
