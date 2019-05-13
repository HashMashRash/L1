let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        q1: prompt("Введите обязательную статью расходов в этом месяце"),
        q2: prompt("Во сколько обойдется?"),
        q3: prompt("Введите обязательную статью расходов в этом месяце"),
        q4: prompt("Во сколько обойдется?"),

       

    },

    optionalExpenses: {},
    income: [],
    savings: false,


};

appData.expenses.q1 = appData.expenses.q2;
appData.expenses.q3 = appData.expenses.q4;

alert (appData.budget/30);