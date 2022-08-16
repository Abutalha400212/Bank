document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Withdraw Input //
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawFeild = withdrawInput.value;
    const newWithdrawValue = parseFloat(withdrawFeild);

    //withdraw Adding Input//
    const withdrawAdd = document.getElementById('withdraw-add')
    const withdrawAddFeild = withdrawAdd.innerText;
    const previousWithdrawAddValue = parseFloat(withdrawAddFeild);

    totalWithdraw = newWithdrawValue + previousWithdrawAddValue;

    withdrawAdd.innerText = totalWithdraw;


    const total = document.getElementById('total')
    const totalFeild = total.innerText
const totalValue = parseFloat(totalFeild);
totalAmount = totalValue - newWithdrawValue;
total.innerText = totalAmount;

withdrawInput.value = '';
})