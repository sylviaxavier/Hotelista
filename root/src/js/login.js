const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener("click", () => {
    const email = document.getElementsByName('email')[0].value;
    const senha = document.getElementsByName('senha')[0].value;

    if (email === '' || senha === '') return;

    const emailSpan = document.querySelector('#emailInvalido');
    const senhaSpan = document.querySelector('#senhaInvalida');
    emailSpan.style.opacity = 0;
    senhaSpan.style.opacity = 0;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const senhaRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/g;

    if (!emailRegex.test(email)) emailSpan.style.opacity = 1;
    if (!senhaRegex.test(senha)) senhaSpan.style.opacity = 1;
});