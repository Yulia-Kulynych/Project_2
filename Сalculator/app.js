let a = '';// первое число
let b = '';//второе
let sign = '';//
//let finish = false;

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operation = ['-', '+', 'X', '/', '%','+/-'];
let output = document.querySelector('.calc-screen p');

function AC (){//очищает строку
    a = '';// первое число
    b = '';//второе
    sign = '';//
   
    output.textContent = 0;
}

document.querySelector('.ac').onclick = AC;

document.querySelector('.buttons').onclick=(event)=>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    
    output.textContent = '';
    let key = event.target.textContent;//получаем значение нажатой кнопки
    if (numbers.includes(key)){// если нажата цифра
        if(b=='' && sign == ''){
        a=a+key;
        console.log(a,b,sign);
        output.textContent = a;
        }
        
        else {
            b=b+key;
            
            output.textContent = b;
        }
        console.log(a,b,sign);
        return;
    }
    if (operation.includes(key)){
        sign=key;
        output.textContent = sign;
        console.log(a,b,sign);
        return;
    }
    if (key=="="){
        if(sign=="+"){
            a=(+a)+(+b);
            }
        else if(sign=="-"){
            a=(+a)-(+b);
            }
        else if(sign=="X"){
            a=(+a)*(+b);
            } 
        else if(sign=="/"){
            if (b==0){
                output.textContent = "Error";
                a='';
                b='';
                sign = '';
                return;
            }
            a=(+a)/(+b);
            } 
        else if(sign=="%"){
            a=((+a)*(+b))/100;
            } 
        else if(sign=="+/-"){
            a=(+a)*(-1);
            } 
           
            output.textContent = a;
            console.log(a,b,sign); 
    }
}