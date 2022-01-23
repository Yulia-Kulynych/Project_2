// варианты ответов
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');
// все варианты ответов вместе
let optionElements=document.querySelectorAll('.option');
//вопрос
let question = document.getElementById('question');
let numberOfquestion= document.getElementById('number-of-question');
let numberOfAllquestion= document.getElementById('number-of-all-questions');

let indexOfQuestion // индекс текущего вопроса
let indexOfPage=0;

let btnNext = document.getElementById('btn-next');
let score = 0;
let correctAnswer =document.getElementById('correct-answer');

let questions =[
    {
        question: "Сколько углов в прямоугольнике?",
        options: [
            '1',
            '2',
            '3',
            '4',
        ],
        rightAnswer: 3
    },
    {
        question: "Сколько углов в треугольнике?",
        options: [
            '1',
            '2',
            '3',
            '4',
        ],
        rightAnswer: 2
    },
    {
        question: "Продолжить последовательность 12, 36, 13, 39, 14, 42, 15, ...  ?",
        options: [
            '30',
            '45',
            '60',
            '75',
        ],
        rightAnswer: 1
    },
    {
        question: "Какое число не простое?",
        options: [
            '11',
            '3',
            '18',
            '5',
        ],
        rightAnswer: 2
    },
    {
        question: "2 в пятой стенени?",
        options: [
            '8',
            '16',
            '32',
            '64',
        ],
        rightAnswer: 2
    },
    {
        question: "Вычислите 1% от 1225",
        options: [
            '12.25',
            '1.225',
            '0.1225',
            '1225',
        ],
        rightAnswer: 0
    },
    {
        question: "Вычислите периметр квадрата, если его площадь равна 100 кв. см.?",
        options: [
            '50 см',
            '40 кв см',
            '40см',
            '20 см',
        ],
        rightAnswer: 2
    },
    
    {
        question: "График  функции y=-1?",
        options: [
            'Гипербола',
            'прямая паралельная оси x',
            'прямая паралельная оси y',
            'Окружность',
        ],
        rightAnswer: 1
    },
    {
        question: "Продолжить ряд чисел: 7, 9, 16, 25, 41, ...",
        options: [
            '57',
            '66',
            '94',
            '45',
        ],
        rightAnswer: 1
    },
    {
        question: "Размер бабочки 8мм. Она изображена в книге в масштабе 4:1. Какой размер изображения?",
        options: [
            '32 см',
            '32 мм',
            '2 см',
            '20 см',
        ],
        rightAnswer: 1
    },
    {
        question: "График квадратичной функции?",
        options: [
            'Гипербола',
            'Парабола',
            'Окружность',
            'Прямая',
        ],
        rightAnswer: 1
    },
    {
        question: "Площадь круга",
        options: [
            'P*R*R',
            '2*P*R',
            'P*D*D',
            'P*D*D/2',
        ],
        rightAnswer: 0
    },
    {
        question: "Косинус 60 градусов?",
        options: [
            '1/2',
            '(корень с 2)/2',
            '1',
            '0',
        ],
        rightAnswer: 0
    },

    {
        question: "Минута в геометрии - это",
        options: [
            '1/180 градуса',
            '1/120 градуса',
            '1/60 градуса',
            '1/10 градуса',
        ],
        rightAnswer: 2
    },
    {
        question: "Котангенс - это",
        options: [
            'sin/tan',
            'sin/cos',
            'cos/sin',
            'sin/tan',
        ],
        rightAnswer: 2
    },
    

]

numberOfAllquestion.innerHTML = questions.length// колич вопросов 
// страница загружена

let load = ()=> {

    
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];
    
    
    numberOfquestion.innerHTML = indexOfPage+1; // текущий вопрос, страница
    indexOfPage++;
    console.log("Количество вопросов"+indexOfPage)
       // }
    }

    
    let completedAnswers = [];

    let randomQuestion=()=>{
        let randomNumber=Math.floor(Math.random()*questions.length);
        let hitDuplicate = false;

        if (indexOfPage==questions.length){
            gameOver();
        }
        else{
            if(completedAnswers.length>0){
                completedAnswers.forEach(item=> {
                    if (item==randomNumber){
                        hitDuplicate=true;
                   }
                });
                if(hitDuplicate){
                    randomQuestion();
                }
                else{
                    indexOfQuestion = randomNumber;
                    load();
                }
            };
            if (completedAnswers==0){
                indexOfQuestion=randomNumber;
                load();
            }
        };
        completedAnswers.push(indexOfQuestion);
    };

let checkAnswer = el =>{
       console.log(el.target.dataset.id);//получаем ID ответа по названию атрибута
       if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
            score++;
             console.log(score)   
       }
       else{
        gameOver();
       }
       
           
           if (score==5){
               alert("Поздравляем! Вы выиграли 5000");
               }
            else if (score==10){
                alert("Поздравляем! Вы выиграли 100 000");
                }
            else if(score==15){
                al("Поздравляем! Вы выиграли 1 000 000");
            }
    }


for (option of optionElements){
         option.addEventListener('click', e =>checkAnswer(e));//event click
   }
let gameOver=()=>{
    alert ("Игра окончена, вы ответили на "+score+ " вопросов");
};

let nextQuestion = ()=>{
   
   randomQuestion();
}
btnNext.addEventListener('click', nextQuestion)

window.addEventListener('load', ()  => {
    randomQuestion();
    
})

