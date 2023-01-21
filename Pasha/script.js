const massageName = document.createElement('div');
const massageEmail = document.createElement('div');
const massagePassword = document.createElement('div');
const massageAlert = document.createElement('dive');

massageName.style.backgroundColor = 'blue';
massageEmail.style.backgroundColor = 'biscuit';
massagePassword.style.backgroundColor = 'lightblue';
massageAlert.style.backgroundColor = 'white'

massageName.innerHTML = 'Enter your username <br> for example <strong>Segrey_Stone_1900</strong>';
massageEmail.innerHTML = 'Enter your email <br> for example <strong>SergeyTheStonestGuy@gmail.com</strong>';
massagePassword.innerHTML = 'Enter your password <br> for example <strong>IamStone</strong>';
massageAlert.innerHTML = 'Make sure enter everything is ok <br> and you are not stone like segrey';

massageName.className = 'massage massage-Name';
massageEmail.className = 'massage massage-Email';
massagePassword.className = 'massage massage-Password';
massageAlert.className = 'massage massage-Alert';

const regInputDiv = document.querySelector('.p-input-reg')