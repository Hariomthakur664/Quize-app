const Quitions=[
    {
        Quition:"which language is used to front-end?",
        Answers:[
            {text:"c",correct:false},
            {text:"Java",correct:false},
            {text:"JS",correct:true},
            {text:"python",correct:false}
        ]
    },
    {
        Quition:"which language is used to Back-End?",
        Answers:[
            {text:"c",correct:false},
            {text:"html",correct:false},
            {text:"JS",correct:false},
            {text:"python",correct:true}
        ]
    },
    {
        Quition:"Which launguage is Dynamic ?",
        Answers:[
            {text:"python",correct:true},
            {text:"c",correct:false},
            {text:"Java",correct:false},
            {text:"JS",correct:false}
            
        ]
    },
    {
        Quition:"Which types of language combination of BootStrap   ?",
        Answers:[
            {text:"c & html",correct:false},
            {text:"Java & CSS",correct:false},
            {text:"JS & CSS",correct:true},
            {text:"python & html",correct:false}
        ]
    },
    {
        Quition:"Which Proccedure is used in C++ language ?",
        Answers:[
            {text:"POPL",correct:false},
            {text:"GJBL",correct:false},
            {text:"OOPM",correct:true},
            {text:"OLP",correct:false}
        ]
    },
    {
        Quition:"Variables declared with the let keyword have what type of scope?",
        Answers:[
            {text:"Function Scope",correct:false},
            {text:"Block Scope",correct:true},
            {text:"Inline Scope",correct:false},
            {text:"Block Scope",correct:false}
        ]
    },
    {
        Quition:"Which attribute must have a unique value each time it is used in an HTML document?",
        Answers:[
            {text:"Titel",correct:false},
            {text:"class",correct:false},
            {text:"ID",correct:true},
            {text:"Style",correct:false}
        ]
    },
    {
        Quition:" Which CSS property will not trigger layout recalculation?",
        Answers:[
            {text:"Top",correct:false},
            {text:"Opacity",correct:true},
            {text:"Height",correct:false},
            {text:"Width",correct:false}
        ]
    },
    {
        Quition:" What will be the value of selected? let pocket = ['turnip', 'stone', 'log', 'apple']; Let selected = pocket[1]?",
        Answers:[
            {text:"Stone",correct:true},
            {text:"turnip",correct:false},
            {text:"log",correct:false},
            {text:"apple",correct:false}
        ]
    },
    {
        Quition:"In this code, what is the term for the h1? h1 { color: red; font-size: 5em; }",
        Answers:[
            {text:"Markup",correct:false},
            {text:"Combinator",correct:false},
            {text:"Declator",correct:false},
            {text:"Selector",correct:true}
        ]
    }
]

const QuitionElement=document.querySelector("#quitions");
const answerbutton=document.querySelector("#Anser-btn");
const NextElement=document.querySelector("#next");

let QuitionIndex=0;
let score=0;

function startQuiz(){
    QuitionIndex=0;
    score=0;
    NextElement.innerHTML="Next";
    ShowQuitions();
}
function ShowQuitions(){
    resetState();
    let currentQuition=Quitions[QuitionIndex];
    let QuitionNo=QuitionIndex+1;
    QuitionElement.innerHTML=QuitionNo + "." + currentQuition.Quition;

    currentQuition.Answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    })
}

function resetState(){
    // NextElement.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCurrect=selectBtn.dataset.correct==="true";
    if(isCurrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("in-correct");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    NextElement.style.display="block";
    
}

function showScore(){
    resetState();
    QuitionElement.innerHTML=`You Scored ${score} Out of ${Quitions.length}!`;
    NextElement.innerHTML="Play Again";
    NextElement.style.display="block";
}

function handleNextBtn(){
    QuitionIndex++
    if(QuitionIndex<Quitions.length){
        NextElement.style.display="none";
        ShowQuitions();
    }
    else{
        showScore();
    }
}

NextElement.addEventListener("click",()=>{
    if(QuitionIndex<Quitions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})


startQuiz(); 