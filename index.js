'use strict';


let money = +prompt ("Ваш бюджет на месяц?", ""),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


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

};
appData.moneyPerDay = appData.budget/30; 
console.log(appData.moneyPerDay);

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