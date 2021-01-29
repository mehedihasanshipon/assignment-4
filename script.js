// Ticket quantity count function
// This function called by javascript onclick event listener.If you feel confused please 
// check line 69,70,79,80 in index.html. Thank you!!
function ticketQuantityChange(isIncrease,ticketClassName){
    const ticketInput = document.getElementById(ticketClassName);
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketNewCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    totalCalculate();
}

// Total price count function
function totalCalculate(){
    const firstClassCount = getInput('firstClassTicket');
    const economyClassCount = getInput('economyClassTicket');
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subTotal').innerText = '$' + totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// Get input function
function getInput(id){
    const ticketInput = document.getElementById(id);
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
