
const btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;
    const resultDay = document.querySelector('.day');
    const resultMonth = document.querySelector('.month');
    const resultYear = document.querySelector('.year');

    const correntDay = new Date().getDate();
    const correntMonth = new Date().getMonth() + 1;
    const correntYear = new Date().getFullYear();

   
    //mensagem de erro
    let isValid = true

    const erroRequired = document.querySelectorAll('#erro-required')
    const erroInput = document.querySelectorAll('.errorr')
    const erroLabel = document.querySelectorAll('.erro-label')


    erroRequired.forEach(erro =>{
        if (day === "" && month === "" && year === ""){
            erro.style.display = "block";

            erroInput.forEach(input => {
                input.style.border = "1px solid hsl(0, 100%, 67%)"
            })

            erroLabel.forEach(label => {
                label.style.color = 'hsl(0, 100%, 67%)';
            })
        }else{
            erro.style.display = "none";
            erroInput.forEach(input => {
                input.style.border = '1px solid hsl(0, 0%, 86%)';
            })

            erroLabel.forEach(label => {
                label.style.color = 'hsl(0, 1%, 44%)';
            })
        }
    })
    
    const erroD = document.getElementById('error-day');
        
    if (day > 31 || day < 0){
        erroD.style.display = 'block';
        isValid = false;

        erroInput.forEach(input => {
            input.style.border = "1px solid hsl(0, 100%, 67%)"
        })

        erroLabel.forEach(label => {
            label.style.color = 'hsl(0, 100%, 67%)';
        })
    }
    else{
         erroD.style.display = 'none';
    } 

    const erroM = document.getElementById('error-month');
    
    if (month> 12 || month < 0){
        erroM.style.display = 'block';
        isValid = false;

        erroInput.forEach(input => {
            input.style.border = "1px solid hsl(0, 100%, 67%)"
        })

        erroLabel.forEach(label => {
            label.style.color = 'hsl(0, 100%, 67%)';
        })
    }
    else{
        erroM.style.display = 'none';
    }
    
    const erroY = document.getElementById('error-year');
    
    if (year > correntYear){
        erroY.style.display = 'block';
        isValid = false;

        erroInput.forEach(input => {
            input.style.border = "1px solid hsl(0, 100%, 67%)"
        })

        erroLabel.forEach(label => {
            label.style.color = 'hsl(0, 100%, 67%)';
        })
    }
    else{
        erroY.style.display = 'none';
        



    //calculando idade

    if(day !== "" && month !== "" && year !== "" && isValid === true){

        const today = new Date(correntYear, correntMonth, correntDay);
        
            
        let ageDay = correntDay - Number(day);
        let ageYear = correntYear - Number(year);
        let ageMonth = correntMonth - Number(month);
        
        if (ageDay < 0) {
            ageMonth -= 1;
            ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
                
        if (ageMonth < 0) {
            ageYear -= 1;
            ageMonth += 12;
        }
        
        resultDay.innerHTML = ageDay;
        resultMonth.innerHTML = ageMonth;
        resultYear.innerHTML = ageYear;
        
        } 
        
        
    }
    
    
})





