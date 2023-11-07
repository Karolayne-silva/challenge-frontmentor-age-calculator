import { differenceInCalendarDays, differenceInCalendarYears, differenceInCalendarMonths } from 'date-fns';

const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{

    const day = parseInt(document.querySelector('#day').value);
    const month = parseInt(document.querySelector('#month').value);
    const year = parseInt(document.querySelector('#year').value);
    const resultDay = document.querySelector('.day');
    const resultMonth = document.querySelector('.month');
    const resultYear = document.querySelector('.year');

    const correntDay = new Date().getDate();
    const correntMonth = new Date().getMonth() + 1;
    const correntYear = new Date().getFullYear();
    
    const nascimento = new Date(correntYear, correntMonth +1, correntDay);
    const atual = new Date(correntDay, correntMonth +1, correntYear)

    
    const ageDay = differenceInCalendarDays(atual, nascimento);
    const ageYear = differenceInCalendarYears(atual, nascimento);
    const ageMonth = differenceInCalendarMonths(atual, nascimento) % 12;
    
    resultDay.innerHTML = ageDay;
    resultMonth.innerHTML = ageMonth;
    resultYear.innerHTML = ageYear;
    
    //mensagem de erro
    //const erro = document.getElementById('error-day');
    
    /* if (day > 31 || day < 0){
        erro.style.display = 'block';
    }
    else{
         erro.style.display = 'none';
    } */
       
    
    //const erro = document.getElementById('error-month');
    /* 
    if (month> 12 || month <= 0){
        erro.style.display = 'block';
    }
    else{
        erro.style.display = 'none';
    } */
    
    
    //const erro = document.getElementById('error-year');
    
    /* if (year > correntYear){
        erro.style.display = 'block';
    }
    else{
        erro.style.display = 'none';
    } */
     
    
})





