function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const newAmountValue = parseFloat(inputAmountText);
    //clear deposit input field
    inputField.value = '';

    return newAmountValue;
};
function updateTotalField(totalFieldId, newAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const currentTotal = parseFloat(totalText);
    totalElement.innerText = currentTotal + newAmount;
};
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    return currentBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText); */
    const currentBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = currentBalanceTotal + amount;
    } else {
        balanceTotal.innerText = currentBalanceTotal - amount;
    }
};


document.getElementById('deposit-btn').addEventListener('click', function () {
    //get deposit value
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText); */


    //get and update current deposit amount
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const currentDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = currentDepositTotal + newDepositAmount; */


    //Update Balance Total
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = currentBalanceTotal + newDepositAmount; */
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }

});

//Handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get withdraw amount
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */


    //Get and update current withdraw amount
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = currentWithdrawTotal + newWithdrawAmount; */


    //Update withdraw Balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = currentBalanceTotal - newWithdrawAmount; */
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});