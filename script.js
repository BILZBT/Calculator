const display1=document.querySelector('.display1');
const display2=document.querySelector('.display2');
const temp_result=document.querySelector('.temp-result');
const numbers=document.querySelectorAll('.btnno');
const operations=document.querySelectorAll('.btnop');
const C=document.querySelector('.btnc');
const CE=document.querySelector('.btnce');
const equals=document.querySelector('.btnequals');
let num1='';
let num2='';
let result=null;
let dot=false;
let last_op='';

numbers.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        if (e.target.innerText==='.' && !dot){
            dot=true;        
        }
        else if (e.target.innerText==='.' && dot){
            return;
        }
        num2+= e.target.innerText;
        display2.innerText=num2
    });
});


operations.forEach((operator)=>{
    operator.addEventListener('click',(e)=>{
        if (!num2){
            return;
        };
        dot=false;
        let op=e.target.innerText;
        if (num1 && num2 && last_op){
            calculate();
        }
        else{
            result=parseFloat(num2)
        }
        clearvar(op);
        last_op=op;
        
    });
});

function clearvar(opn=''){
    num1+= num2 + ' ' + opn+ ' ';
    display1.innerText=num1;
    display2.innerText='';
    num2='';
    temp_result.innerText=result;
};


function calculate(){
    if (last_op==='x'){
        result=parseFloat(result)*parseFloat(num2);
    }
    else if (last_op==='+'){
        result=parseFloat(result)+parseFloat(num2);
    }
    else if (last_op==='-'){
        result=parseFloat(result)-parseFloat(num2);
    }
    else if (last_op==='÷'){
        result=parseFloat(result)/parseFloat(num2);
    }
    else if (last_op==='%'){
        result=parseFloat(result)%parseFloat(num2);
    }
};


equals.addEventListener('click',()=>{
    if(!num1 || !num2)return;
    dot=false;
    calculate();
    clearvar();
    display2.innerText=result;
    temp_result.innerText='';
    result='';
});


C.addEventListener('click',()=>{
    num1='';
    num2='';
    display1.innerText='';
    display2.innerText='';
    result='';
    temp_result.innerText='';
});

CE.addEventListener('click',()=>{
    num2='';
    display2.innerText='';
});