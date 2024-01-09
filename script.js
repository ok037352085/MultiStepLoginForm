const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');

btnNext.onclick = (e) => 
{
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordInput.focus(), 500);
    loginTitle.innerHTML = 'Welcome';
    userEmail.innerHTML = emailInput.value;
};

let resetInput = '';

btnBack.onclick = (e) => 
{
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTitle.innerHTML = 'Login';
    userEmail.innerHTML = 'Please login to use the platform';
    emailInput.focus();
    emailInput.value = resetInput;
};

checkboxPass.onclick = () =>
{
    if(checkboxPass.checked)
    {
        passwordInput.type = 'text';
    }
    else
    {
        passwordInput.type = 'password';
    }
};
