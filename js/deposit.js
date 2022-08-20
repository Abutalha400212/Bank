document.getElementById('deposit-btn').addEventListener('click',function(){
    //Deposit feild Sector//
    const depositInput = document.getElementById('deposit-input');
    const depositfeild =depositInput.value
    const newDepositValue = parseFloat(depositfeild);
    // deposit adding sector//
    const depositAdd = document.getElementById('deposit-add')
    const depositAddFeild = depositAdd.innerText;
    const previousDepositAddValue = parseFloat(depositAddFeild)
    totalDeposit = previousDepositAddValue + newDepositValue;
depositAdd.innerText = totalDeposit;
    //total Amount //
    const total = document.getElementById('total')
    const totalFeild = total.innerText
const totalValue = parseFloat(totalFeild);
totalAmount = newDepositValue + totalValue;
total.innerText = totalAmount;
//finalize//
depositInput.value ='';

})