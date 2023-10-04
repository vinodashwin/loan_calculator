document.getElementById('loan-form').addEventListener('submit',calculateResult);

function calculateResult(e){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('intrest');
    const year = document.getElementById('year');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest  = document.getElementById('total-interest');
    console.log(e);
    const principle = parseFloat(amount.value);
    console.log('1 ',principle);
    const calculateIntrest = (parseFloat(interest.value) / 100) / 12;
    console.log('2 ',calculateIntrest);
    const calculatePayment = parseFloat(year.value) * 12;
    console.log('3 ',calculatePayment);
    
    
    const x = Math.pow(1 + calculateIntrest, calculatePayment);
    console.log('4 ',x);
    const monthly = (principle * x * calculateIntrest)/(x-1);
    console.log('111 ',monthly);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed();
        totalPayment.value = (monthly * calculatePayment).toFixed();
        totalInterest.value = ((monthly * calculatePayment) - principle).toFixed();
    } else {
        showError('Something went wrong, please check the values');
    }

    e.preventDefault();
}

function showError(error){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv,heading);

    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}