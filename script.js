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
    const totalTicket = firstClassCount + economyClassCount;
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subTotal').innerText = '$' + totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
    document.getElementById('firstClassQuantity').innerText = firstClassCount;
    document.getElementById('firstClassPrice').innerText = firstClassCount * 150;
    document.getElementById('economyClassQuantity').innerText = economyClassCount;
    document.getElementById('economyClassPrice').innerText = economyClassCount * 100;
    document.getElementById('totalTicket').innerText = totalTicket;
    document.getElementById('totalTicketPrice').innerText = totalPrice;
}

// Get input value function
function getInput(id){
    const ticketInput = document.getElementById(id);
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//Ticketing area and confirm-area display none and block section
document.getElementById('bookButton').addEventListener('click',function(){
    const ticketArea = document.getElementById('ticket-area');
    ticketArea.style.display = 'none';
    const confirmArea = document.getElementById('confirm-area');
    confirmArea.style.display = 'block';
})
