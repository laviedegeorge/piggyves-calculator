/* -------------- MOBILE NAVIGATION --------- */
const navBtn = document.getElementById('mobile-btn');

navBtn.addEventListener('click', ()=> {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active-nav');
})



/* ----------- INTEREST CALCULATION ---------------------- */

const interestRate = {
    piggyBank: 10,
    safeLock: 15.5,
    target: 10,
    flex: 10,
    flexDollar: 6
}


const simpleInterest = (amount, interestRate, timeInYears)=> {
    const amt = parseInt(amount).toFixed(2)
    const iR = interestRate/100;
    const rT = iR * timeInYears;
    const total = (amt * (1 + rT)).toFixed(2);
    const interest = (total - amt).toFixed(2);
    console.log(amt, interest, total)
    return [amt, interest, total];
}

const calcInterest = ()=> {
    const input = {
        amount: document.getElementById('amt').value,
        InvestmentType: document.getElementById('invest_type').value,
        time: document.getElementById('duration').value
    }
    
    const amtToDolar = input.amount / 400;
    const piggyBankI = simpleInterest(input.amount, interestRate.piggyBank, input.time);
    const safeLockI = simpleInterest(input.amount, interestRate.safeLock, input.time);
    const flexDollarI = simpleInterest(amtToDolar, interestRate.flexDollar, input.time);

    const interest = {
        piggyBank: piggyBankI,
        safeLock: safeLockI,
        target: piggyBankI,
        flex: piggyBankI,
        flexDollar: flexDollarI
    }

    console.log(interest);
    showResult(interest, input.InvestmentType, input.time);
}

const showResult = (interest, investmentType, time)=>{
    
    switch (investmentType) {
        case 'piggyBank':
            document.getElementById('total_value').innerHTML = `${interest.piggyBank[2]}`;
            document.getElementById('int_val').innerHTML = 
            `${interest.piggyBank[1]} at ${interestRate.piggyBank}% / annum For ${time} year(s)`;
            break;

        case 'safeLock':
            document.getElementById('total_value').innerHTML = `${interest.safeLock[2]}`;
            document.getElementById('int_val').innerHTML = 
            `${interest.safeLock[1]} at ${interestRate.safeLock}% / annum For ${time} year(s)`;
            break;

        case 'target':
            document.getElementById('total_value').innerHTML = `${interest.target[2]}`;
            document.getElementById('int_val').innerHTML = 
            `${interest.target[1]} at ${interestRate.target}% / annum For ${time} year(s)`;
            break;

        case 'flex':
            document.getElementById('total_value').innerHTML = `${interest.flex[2]}`;
            document.getElementById('int_val').innerHTML = 
            `${interest.flex[1]} at ${interestRate.flex}% / annum For ${time} year(s)`;
            break;
        
        case 'flexDollar':
            document.getElementById('total_value').innerHTML = `${interest.flexDollar[2]}`;
            document.getElementById('int_val').innerHTML = 
            `${interest.flexDollar[1]} at ${interestRate.flexDollar}% / annum For ${time} year(s)`;
        break;
    
        default:
            break;
    } 
}
calcInterest(50000, 0.5);

const calc_btn = document.getElementById('calc_btn');
calc_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    calcInterest();
})


/* 10% per annum on Piggybank
Up to 15.5% per annum on SafeLock
10% per annum on Target 
10% per annum on Flex
6% per annum on Flex Dollar
Up to 25% on Investify */

/* A = P (1 + rt)
A	= 	final amount
P	= 	initial principal balance
r	= 	annual interest rate
t	= 	time (in years) */

/* A = P(1 + \frac{r}{n})^{nt}
A	= 	final amount
P	= 	initial principal balance
r	= 	interest rate
n	= 	number of times interest applied per time period
t	= 	number of time periods elapsed */