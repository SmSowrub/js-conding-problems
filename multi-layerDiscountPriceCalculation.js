function ticketsPrice(ticketsQuantity){
    let fast100Days =100;
    let second100Days = 90;
    let lastTicketsRats = 70;
    if(ticketsQuantity <= 100){
        let fast100DaysRates=ticketsQuantity * fast100Days;
        return fast100DaysRates;
    }
    else if (ticketsQuantity <= 200){
        let fast100DaysRates= 100 * fast100Days;
        let second100DaysLess = ticketsQuantity - 100;
        let second100DaysRates = second100DaysLess * second100Days;
        let second100DaysTotal =fast100DaysRates +second100DaysRates;

        return second100DaysTotal
    }
    else{
        let fastTicketsRatsPrice =100 * fast100Days;
        let secondTicketsRatsPrice =100 * second100Days;
        let lastSomeDays = ticketsQuantity -200;
        let lastEvryDaysPrice = lastSomeDays * lastTicketsRats;
        let lastEvryDaysPriceTotal = fastTicketsRatsPrice + secondTicketsRatsPrice + lastEvryDaysPrice;
        return lastEvryDaysPriceTotal;
        
    }
}

console.log(ticketsPrice(350));