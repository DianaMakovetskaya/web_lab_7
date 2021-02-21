//-------------------------------------------task1--------------------------------------------------
//В текстове поле вводиться рядок.
// При натисканні на кнопку має виконатись функція яка перевіряє в я кому регістрі написаний четвертий символ у введеному рядку.
// Якщо символ написано у верхньому регістрі – виводиться значення true, якщо у нижньому –false.
// Результат роботи функції має відобразитись на сторінці (наприклад, у абзаці).

let input1 = document.getElementById('input1');
let button1 = document.getElementById('button1');
let result1 = document.getElementById('result1');


button1.onclick = (ev) => {
    task1();
    ev.preventDefault();
}

function task1() {
    let char;
    let countOfLetters=0;
    let res=false;
    let regex=/\s/;

    for(let i=0;i<input1.value.length;i++){
        if(countOfLetters===4){break };
        char = input1.value.charAt(i);
        if(!regex.test(char)){
            countOfLetters++;
        }
    }

    if(countOfLetters<4){
        alert("Введіть мінімум 4 символа!!")
    }
    if (char === char.toLocaleUpperCase()) {
        res='4 символ є великою літерою';
    }else{
        res='4 символ є малою літерою';

    }
    result1.textContent=res;
}
//-------------------------------------------task2--------------------------------------------------
//В момент завантаження сторінки має виводитись повідомлення «Ранок», «День», «Вечір», «Ніч» в залежності від поточного часу
// (вважати, що ранок – від 6:00 до 11:59, день – від 12:00 до 17:59, вечір – від 18:00 до 23:59, ніч – від 00:00 до 5:59).
let current= new Date();

let startTimeMorning = new Date();
startTimeMorning.setHours(6, 0);

let endTimeMorning = new Date();
endTimeMorning.setHours(11, 59);

let startTimeDay = new Date();
startTimeDay.setHours(12, 0);

let endTimeDay = new Date();
endTimeDay.setHours(17, 59);

let startTimeEvening = new Date();
startTimeEvening.setHours(18, 0);

let endTimeEvening= new Date();
endTimeEvening.setHours(23, 59);

let startTimeNight = new Date();
startTimeNight.setHours(0, 0);

let endTimeNight= new Date();
endTimeNight.setHours(5, 59);

if(current>startTimeMorning && current< endTimeMorning) {
alert("Ранок")
}else if(current>startTimeDay && current< endTimeDay){
    alert("День")
}else if(current>startTimeEvening && current< endTimeEvening){
    alert("Вечір")
}else if(current>startTimeNight && current< endTimeNight){
    alert("Ніч")
}

//-------------------------------------------task3--------------------------------------------------
//В текстове поле вводиться число.
// При натисканні на кнопку має виконатись функція яка перетворює введене значення в двійкову систему числення (BIN) )
// та виводить перетворений результат у вікно типу alert з написом « = BIN) ».

let button2= document.getElementById('button2');
let input2=document.getElementById('input2');
button2.onclick=(ev)=>{
    dec2bin(input2.value);
    ev.preventDefault();
}
function dec2bin(dec){
    let bin= (dec >>> 0).toString(2);
    alert('Введене число = '+ dec + ' Отриманий результат:'+ bin);
}
