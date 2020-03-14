let money = +prompt('Ваш бюджет на месяц?',''),
    time = +prompt('Введите дату в формате YYYY-MM-DD',''),
    needMoney = +prompt('Введите обязательную статью расходов в этом месяце',''),
    howMany = +prompt('Во сколько обойдется?','');

    let appData = {
        budget:money,
        timeData:time,
        expenses:{
            needMoney:howMany,
            
            
        },
        income: [],
        saving:false
    }

    console.log(appData.budget);

    alert(money/30);