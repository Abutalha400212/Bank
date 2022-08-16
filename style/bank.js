document.getElementById('submit').addEventListener('click',function(){
    const emailFeild = document.getElementById('email')
    const email = emailFeild.value;
    const passwordFeild = document.getElementById('password')
    const password = passwordFeild.value;
    if(email === 'abutalha@personal.com' && password === 'security'){
window.location.href = 'bank-inside.html'
    }
    else{
        console.log('invalid User')
    }
})