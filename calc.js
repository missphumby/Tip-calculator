
    let tipAmount = document.querySelector('.tip-input');
    let total = document.querySelector('.total-input');
    console.log(tipAmount);

    tipAmount.disabled = true;
    total.disabled = true;
    const computeLoan = document.querySelector('#compute-loan');
    console.log(computeLoan)
    const feedback = document.querySelector('#feedback');

    computeLoan.addEventListener('click', function() {
        let billAmount = Number(document.querySelector('.bill-input').value);
        let percentageTip = Number(document.querySelector('.percentage-input').value);
    

        // billAmount = Number(billAmount.value);
        // percentageTip = Number(percentageTip.value);

        if(billAmount === '' || billAmount <= 0 || isNaN(billAmount)){
        alert('please enter a valid bill amount')
        }
        else if(percentageTip <= 0 || percentageTip === '' || isNaN(percentageTip)){
            alert('please enter a valid percentage amount')
        }
        else{
        let tipPayment = billAmount * (percentageTip * 0.01);
        tipAmount.value = `$${tipPayment}`

        let totalPayment = billAmount + tipPayment;
        total.value =  `$${totalPayment}`
        
    }

        // billAmount = '';
        // percentageTip = '';

        // feedback.style.backgroundColor = "pink";
    })

