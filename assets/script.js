var progressBtn = document.getElementById("progressBtn")

var newQuizBtn = document.getElementById("newQuizBtn")

var startBtn = document.getElementById("startBtn")

var question = document.getElementById("question")

var timerInit = document.getElementById("timer")

var A = document.getElementById("A")

var B = document.getElementById("B")

var C = document.getElementById("C")

var D = document.getElementById("D")

const questionArray = [];

let counter = 0

var mainTimer = document.getElementById('mainTimer')

var arrayWrong=[]

var arrayRight=[]

var BoxA =document.getElementById("boxA")

var BoxB =document.getElementById("boxB")

var BoxC =document.getElementById("boxC")

var BoxD =document.getElementById("boxD")

var quizScore = document.getElementById("quizScore")

var scoreLog = document.getElementById("scoreLog")

var seconds

var score = []

var scoreArray= []

var getInitials= []

var highScore = document.getElementById('highScore')

var initials_Score = {}
        

const question1 = {
    Question: "Which HTML element is used with JavaScript?",
    A: "<js>",
    B: "<scripting>",
    C: "<javascript>",
    D: "<script>",
    Correct: "<script>"

}

const question2 = {
    Question: "Where do you insert the Javascript?",
    A: "The <head> section",
    B: "The <body> section",
    C: "Both the <head> and <body>",
    D: "The <footer>",
    Correct: "The <body> section"
}

const question3 = {
    Question: "What is the correct syntax?",
    A: "<script src='xxx.js'>",
    B: "<script href = 'xxx.js'>",
    C: "<scriptName = 'xxx.js'>",
    D: "<link href = 'xxx.js'>",
    Correct: "<script src='xxx.js'>"

}

const question4 = {
    Question: "Write 'Hello World' in an alert.",
    A: "alert('Hello World')",
    B: "alertbox('Hello World')",
    C: "alert.box('Hello World')",
    D: "msgBox('Hello World')",
    Correct:"alert('Hello World')"

}

const question5 = {
    Question: "How do you create a function?",
    A: "function myFunction()",
    B: "function ++",
    C: "function = myFunction",
    D: "function:myFunction",
    Correct: "function myFunction()"

}

const question6 = {
    Question: "How do you normally call a function?",
    A: "Call myFunction()",
    B: "myFunction()",
    C: "call function myFunction()",
    D: "function.exe",
    Correct: "myFunction()"

}

const question7 = {
    Question: "How do you write an IF statement?",
    A: "if (i==5) {}",
    B: "if i=5 then {}",
    C: "if i=5 {}",
    D: "if i==5 then {}",
    Correct: "if (i==5) {}"

}

const question8 = {
    Question: "How does a WHILE loop start?",
    A: "while (i <=10; i++)",
    B: "while (i <= 10)",
    C: "while i = 1 to 10",
    D: "while.exe",
    Correct: "while (i <= 10)"

}

const question9 = {
    Question: "How does a FOR loop start?",
    A: "for (i=0; i<=5; i++)",
    B: "for (i=0; i<=5)",
    C: "for (i <= 5; i++)",
    D: "for i=1 to 5",
    Correct: "for (i=0; i<=5; i++)"

}

const question10 = {
    Question: "What is a method?",
    A: "A built in function",
    B: "An error",
    C: "An HTML element",
    D: "A stylesheet",
    Correct:"A built in function"

}

const question11 = {
    Question: "How do you add a comment?",
    A: "'This is a comment",
    B: "<!--This is a comment-->",
    C: "//This is a comment",
    D: "'This is a comment'",
    Correct: "//This is a comment"

}

const question12 = {
    Question: "What is proper array syntax?",
    A: "var colors = 'red','green',... ",
    B: "var colors = ['red', 'green',...]",
    C: "var colors =(1:'red',2:'green',...)",
    D: "var colors = {1 = red, 2 = green, ...}",
    Correct: "var colors = ['red', 'green',...]"

}



 questionArray.push(question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,"end")

function storeScore(){

highScore.style.display = 'block';
quizScore.style.display = 'none';
scoreLog.style.display = 'block';
// scoreLog.style.display = 'block'
var scoreList = JSON.parse(localStorage.getItem('scoreList')) || [] ;

scoreList.push(initials_Score)
var newScore = JSON.stringify(scoreList);
localStorage.setItem("scoreList",newScore)

console.log(localStorage)



for (var i=0;i<scoreList.length;i++){
    createList = document.createElement('li');
    createList.textContent = scoreList[i].initials + " " + scoreList[i].score
    scoreLog.appendChild(createList);
}

}





function promptLog() {
    console.log(score)
    let getInitials = prompt("Enter your initials to log your score:")
    if (getInitials === null||'' ){ 
        return;     
    } else {
        initials_Score = {
            initials: getInitials,
            score: score}
        console.log(initials_Score)
        storeScore()
        return;
    }
}


function showScore() {
    
    setTimeout(promptLog,1500)
    mainTimer.style.display='none';
    quizScore.style.display = 'block';
    quiz.style.display = 'none';
    quizScore.textContent = "Score: " + Math.round(((arrayRight.length)/11)*100) + "%";
    score.push(Math.round(((arrayRight.length)/11)*100))
    return score;
}

  
function counterUp () {
    if (counter > questionArray.length){
    counter = 0}
    else {counter++}
    return counter;
}


function newQuiz () {
    location.reload();
}


function countDown (){
    let seconds = 4
    if (seconds > 0){
  myTimer = setInterval(()=>{
    seconds--;
    timer.innerHTML = seconds
    if (seconds<1) {
        clearInterval(myTimer)
        timerInit.style.display ='none'
    }
    },1000)
} else {return;}
}

function quizStart() {
    mainCountDown()
   
quiz.style.display = 'block'
question.textContent=questionArray[counter].Question
    A.textContent=questionArray[counter].A
    B.textContent=questionArray[counter].B
    C.textContent=questionArray[counter].C
    D.textContent=questionArray[counter].D
}



function mainCountDown(cancel){
    if (cancel===0){
        return;
    }


    mainTimer.style.display='block';
    
    let seconds= 31;
    
        function timeDeductA () {
    if (A.textContent!==questionArray[counter].Correct){
        seconds=seconds-2
    }
        }

        function timeDeductB () {
    if (B.textContent!==questionArray[counter].Correct){
        seconds=seconds-2
    }
        }

        function timeDeductC () {
    if (C.textContent!==questionArray[counter].Correct){
        seconds=seconds-2
    }
        }

        function timeDeductD () {
    if (D.textContent!==questionArray[counter].Correct){
        seconds=seconds-2
    }
        }

BoxA.addEventListener('click',timeDeductA)
BoxB.addEventListener('click',timeDeductB)
BoxC.addEventListener('click',timeDeductC)
BoxD.addEventListener('click',timeDeductD)

    
        
myTimer = setInterval(()=>{

BoxA.addEventListener('click',rightWrongA)
BoxB.addEventListener('click',rightWrongB)
BoxC.addEventListener('click',rightWrongC)
BoxD.addEventListener('click',rightWrongD)


    seconds--;
    mainTimer.textContent = seconds
    if (seconds===0 && counter<10) {
        showScore()
        clearInterval(myTimer)
        mainTimer.style.display ='none'
    }
    },1000)
 

} 




function rightWrongA() {

if (counter>10){
    showScore()
    mainCountDown(0)
     
}
if (A.textContent===questionArray[counter].Correct){
    arrayRight.push(questionArray[counter].Question); counterUp(); 
} else{
    arrayWrong.push(questionArray[counter].Question); counterUp(); seconds = (seconds-5);
}
question.textContent=questionArray[counter].Question
    A.textContent=questionArray[counter].A
    B.textContent=questionArray[counter].B
    C.textContent=questionArray[counter].C
    D.textContent=questionArray[counter].D

console.log(arrayRight)
console.log(arrayWrong)

console.log(counter)

return {arrayRight, arrayWrong};
}

function rightWrongB() {

    if (counter>10){
    showScore()
    mainCountDown(0)
     
}
     
if (B.textContent===questionArray[counter].Correct){
    arrayRight.push(questionArray[counter].Question); counterUp(); 
} else {
    arrayWrong.push(questionArray[counter].Question); counterUp(); seconds = (seconds-5);
}
question.textContent=questionArray[counter].Question
    A.textContent=questionArray[counter].A
    B.textContent=questionArray[counter].B
    C.textContent=questionArray[counter].C
    D.textContent=questionArray[counter].D

console.log(arrayRight)
console.log(arrayWrong)

console.log(counter)

return {arrayRight, arrayWrong};
}

function rightWrongC() {

    if (counter>10){
    showScore()
    mainCountDown(0)
     
}
     
if (C.textContent===questionArray[counter].Correct){
    arrayRight.push(questionArray[counter].Question); counterUp();
} else {
    arrayWrong.push(questionArray[counter].Question); counterUp(); seconds = (seconds-5);
}
question.textContent=questionArray[counter].Question
    A.textContent=questionArray[counter].A
    B.textContent=questionArray[counter].B
    C.textContent=questionArray[counter].C
    D.textContent=questionArray[counter].D

console.log(arrayRight)
console.log(arrayWrong)

console.log(counter)

return {arrayRight, arrayWrong};
}

function rightWrongD() {

    if (counter>10){
    showScore()
    mainCountDown(0)
    
}
     
if (D.textContent===questionArray[counter].Correct){
    arrayRight.push(questionArray[counter].Question); counterUp();
    
} else {
    arrayWrong.push(questionArray[counter].Question); counterUp(); seconds = (seconds-5);
}
question.textContent=questionArray[counter].Question
    A.textContent=questionArray[counter].A
    B.textContent=questionArray[counter].B
    C.textContent=questionArray[counter].C
    D.textContent=questionArray[counter].D

console.log(arrayRight)
console.log(arrayWrong)

console.log(counter)

return {arrayRight, arrayWrong}; 
}

function progress(){
    mainTimer.style.display = 'none'
    quiz.style.display = 'none'
    startBtn.style.display= 'none'
    highScore.style.display = 'block';
    scoreLog.style.display = 'block'
    var scoreList = JSON.parse(localStorage.getItem('scoreList')) || [] ;
for (var i=0;i<scoreList.length;i++){
    createList = document.createElement('li');
    createList.textContent = scoreList[i].initials + " " + scoreList[i].score
    scoreLog.appendChild(createList);
}
}

progressBtn.addEventListener('click',progress)

startBtn.addEventListener('click', function(){setTimeout(mainCountDown,3000)})
startBtn.addEventListener('click',runQuiz)
newQuizBtn.addEventListener('click', newQuiz)

function runQuiz() {
scoreLog.textContent = ''
highScore.style.display = 'none';
scoreLog.style.display = 'none';
    setTimeout(quizStart,4000)

    startBtn.style.display ='none';
   
    timerInit.style.display ='block'
   
countDown ()

}


