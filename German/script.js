const regLogin = document.createElement('div');
const regEmail = document.createElement('div');
const regPassword = document.createElement('div');
const regButton = document.createElement('div');

//login
regLogin.innerHTML = 'Login';
regLogin.style.backgroundColor = 'yellow';
regLogin.className = 'announcement reg-announcement';
//email
regEmail.innerHTML = 'Email';
regEmail.style.backgroundColor = 'pink';
regLogin.className = 'announcement email-announcement';
//password
regPassword.innerHTML = 'Password';
regPassword.style.backgroundColor = 'purple';
regLogin.className = 'announcement password-announcement';


const regInputDiv = document.querySelector('.reg-input-block');

regInputDiv.append(regLogin);
regInputDiv.append(regEmail);
regInputDiv.append(regPassword);