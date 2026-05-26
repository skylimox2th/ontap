let current = 0;

let quiz = [];

fetch("data.json")
.then(res => res.json())
.then(data => {

quiz = data.questions;

showQuestion();

});

function showQuestion(){

const q = quiz[current];

document.getElementById("question").innerHTML =
q.q;

let html = "";

q.a.forEach((ans,index)=>{

html += `
<button onclick="checkAnswer(${index})">
${ans}
</button>
<br><br>
`;

});

document.getElementById("answers").innerHTML =
html;

}

function checkAnswer(i){

const q = quiz[current];

if(i === q.c){

alert("Correct");

}else{

alert("Wrong");

}

}

function nextQuestion(){

current++;

if(current >= quiz.length){

current = 0;

}

showQuestion();

}