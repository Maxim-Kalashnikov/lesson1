'use strict';
let money ,
    time ;

function start(){
    money = +prompt ("Ваш бюджет на месяц?", ""),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money =="" || money==null){
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}
start();





    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 1; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 10) {
        
                console.log ("done");
        
                appData.expenses[a] = b;
            } else {         
                   
                console.log('eror');   
                i--;     
                
            }
        
        }
    },
    detectDayBudget: function(){//расчёт на день
        appData.moneyPerDay = (appData.budget/30).toFixed(''); 

console.log("расчёт на день" + appData.moneyPerDay);

    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log('мало');
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log(' нормально ');
        } else if (appData.moneyPerDay > 2000){
            console.log('много ');
        }
        else{
        console.error('error');
        }

    },
    checkSavings:function(){
        if (appData.savings == true){
            let save = +prompt('какова сумма накоплений?'),
            persent = +prompt('под какой процент');
      
            appData.mothIncome = save/100/12*persent;
            alert('доход в месяц с вашего депозита' +  appData.mothIncome);
                
        }
    },
    chooseOptExpenses: function(){// Функция для определения необязательных расходов
        for(let i = 0; i < 2; i++){
            let opn  = prompt('Статья необязательных расходов','');
            appData.optionalExpenses[i] = opn ;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

