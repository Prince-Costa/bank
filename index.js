document.getElementById('logInBtn').addEventListener('click', ()=>{
    const logInSection = document.getElementById('loginPart');
    logInSection.style.display= 'none';

    const depositSection = document.getElementById('depositPart');
    depositSection.style.display = 'block';
})


document.getElementById('depositBtn').addEventListener('click', ()=>{
    const depositForm = document.getElementById('depositForm').value;
    const depositFormValue = parseFloat(depositForm);

    const depositDisplay = document.getElementById('depositDisplay').innerText;
    const depositDisplayValue = parseFloat(depositDisplay);

    var total = depositFormValue + depositDisplayValue;
    document.getElementById('depositDisplay').innerText = total;
    document.getElementById('depositForm').value = '';

    const balance = document.getElementById('balance').innerText;
    const balanceValue = parseFloat(balance);
    var totalBalance = balanceValue + total;
    document.getElementById('balance').innerText = totalBalance;
})

document.getElementById('withdrawBtn').addEventListener('click', ()=>{
    const withdrawDisplay = document.getElementById('withdrawDisplay').innerText;
    const withdrawDisplayValue = parseFloat(withdrawDisplay);

    const withdrawFrom = document.getElementById('withdrawFrom').value;
    const withdrawFromValue = parseFloat(withdrawFrom);

    var totalWithdraw = withdrawDisplayValue + withdrawFromValue;
    document.getElementById('withdrawDisplay').innerText = totalWithdraw;
    document.getElementById('withdrawFrom').value = '';

    const balance = document.getElementById('balance').innerText;
    const balanceValue = parseFloat(balance);
    var totalBalance = balanceValue - totalWithdraw;
    document.getElementById('balance').innerText = totalBalance;
})
