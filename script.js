let btn=document.getElementById("btn")
let questionDiv=document.getElementById("question");
let answerDiv=document.getElementById("options");
let optionBtn1=document.getElementById("ans1");
let optionBtn2=document.getElementById("ans2");
let optionBtn3=document.getElementById("ans3");
let optionBtn4=document.getElementById("ans4");
let currentQuestion=0;
btn.style.display='none'

let questions=[
    {
        question:"const obj = Object.freeze({ a: { b: 2 } });  obj.a.b = 3;  console.log(obj.a.b)" ,
        answers:[2,3,"Error","undefined"],
        correctAnswer:2
    },
    {
        question:"const { length } = 'hello'; console.log(length);" ,
        answers:["undefined",5 ,"Throws Error",0],
        correctAnswer:5
    },
    {
        question:"Which JavaScript method is used to access an HTML element by id?" ,
        answers:["getElementById()","getElement(id)","getElementById(id)","elementById(id)"],
        correctAnswer:"getElementById(id)"
    },
    {
        question:"What is the difference between null and undefined?" ,
        answers:["Both mean the same","null is a type of object, undefined is a number","undefined is default for uninitialized variables, while null is an assigned empty value","undefined can be used as a variable name"],
        correctAnswer:"undefined is default for uninitialized variables, while null is an assigned empty value"
    },
    {
        question:"JavaScript ignores?" ,
        answers:["newlines","spaces","tabs","All of the above"],
        correctAnswer:"All of the above"
    },
    {
        question:" Which of the following is not javascript data types?" ,
        answers:["Undefined type","Number type","Null type","All of the mentioned"],
        correctAnswer:"All of the mentioned"
    },
    {
        question:"How does hoisting work in JavaScript?" ,
        answers:["Only var declarations are hoisted","Both var and function declarations are hoisted","let and const are hoisted but not initialized","All of the above"],
        correctAnswer:"All of the above"
    },
    {
        question:"In JavaScript, which data type is immutable?" ,
        answers:["Array","Object","String","Map"],
        correctAnswer:"String"
    },
    {
        question:"Which of the following can be used to call a JavaScript Code Snippet?" ,
        answers:["Preprocessor","Triggering Event","Function/Method","RMI"],
        correctAnswer:"Function/Method"
    },
    {
        question:"Why event handlers is needed in JS?" ,
        answers:["Allows JavaScript code to alter the behaviour of windows"," Adds innerHTML page to the code","Change the server location","Performs handling of exceptions and occurrences"],
        correctAnswer:"Allows JavaScript code to alter the behaviour of windows"
    },
    {
        question:"console.log(a); var a = 10; let b = 20;" ,
        answers:[10,"ReferenceError","null","undefined"],
        correctAnswer:"undefined"
    },
    {
        question:"What does the call stack do?" ,
        answers:["Stores asynchronous tasks","Keeps track of function calls and execution order","Manages event listeners","Executes background threads"],
        correctAnswer:"Keeps track of function calls and execution order"
    },
    {
        question:"What is typeof null in JavaScript?" ,
        answers:["null","object","undefined","none"],
        correctAnswer:"object"
    },
    {
        question:" Which of the following is the property that is triggered in response to JS errors?" ,
        answers:["onmessage","onerror","onclick","onexception"],
        correctAnswer:"onerror"
    },
    {
        question:"Which of the following is not an error in JavaScript?" ,
        answers:["Missing of Bracket","Division by zero","Syntax error","Missing of semicolons"],
        correctAnswer:"Division by zero"
    }
];
let score = 0;
function resetState(){
    score =0;
    currentQuestion=0;
}
resetState()
function showQuestion(){
    if(questions[currentQuestion]){
        btn.style.display='none';
        let question=questions[currentQuestion].question;
        let answer=questions[currentQuestion].answers;
        [optionBtn1,optionBtn2,optionBtn3,optionBtn4].forEach((element,index)=>{
            element.classList.remove('btn','wrong')
            element.classList.add('button')
            element.textContent=answer[index]
        });
        let questionNo =currentQuestion+1;
        questionDiv.textContent=`${questionNo} :${question}`;
        currentQuestion+=1;
    }
    else{
        showResult()
        btn.textContent="Restart";
        btn.onclick=()=>{
            resetState()
            showQuestion()
            answerDiv.style.display='block'
            btn.textContent="Next Question"
        }
    }    
}
showQuestion()
let question =null;
answerDiv.addEventListener('click',(event)=>{
    let correctAnswer=questions[currentQuestion-1].correctAnswer
    console.log(correctAnswer);
    const clickedButton=event.target
    let clickbtnid=document.getElementById(clickedButton.id)
    if (question!=questions[currentQuestion-1].question){
        if(clickedButton.textContent==correctAnswer){
            score=score+1
            console.log(score);
            clickbtnid.classList.remove('button')
            clickbtnid.classList.add('btn')
            question=questions[currentQuestion-1].question
        }
        else{
            [optionBtn1,optionBtn2,optionBtn3,optionBtn4].forEach((element)=>{
                if(element.textContent==correctAnswer){
                    element.classList.remove('button')
                    element.classList.add('btn')
                }
            });
            question=questions[currentQuestion-1].question
            clickbtnid.classList.remove('button')
            clickbtnid.classList.add('wrong')
        }
        btn.style.display='block'
        console.log(score);
    }
})
function showResult(){
    questionDiv.textContent=`${score}/15`;
    answerDiv.style.display='none'   
}