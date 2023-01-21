// создайом елеметы (loginInput, emailnInput, passwordInput )
const loginInput = document.createElement('div');
const emailnInput = document.createElement('div');
const passwordInput = document.createElement('div');
// передаём названия через HTML (никнейм, почта, пароль)
loginInput.innerHTML = 'Login';
emailnInput.innerHTML = 'Email';
passwordInput.innerHTML = 'Password';
// задаём стиль для цвета (никнейм- касный, почта-синий, пароль-зелёный) 
loginInput.style.backgroundColor = 'red';
emailnInput.style.backgroundColor = 'blue';
passwordInput.style.backgroundColor = 'green';
//  задаєм два ім'я класу для інпутів, 1 ім'я загальне, 2 для того що розуміти до кого звертатися
loginInput.className = 'notification login-notification';
emailnInput.className = 'notification email-notification';
passwordInput.className = 'notification password-notification';
// возвращает все элементы с reg-input-block
const regInputDiv = document.querySelector('.reg-input-block');
// Додаємо елементи до дерева DOM (document)
regInputDiv.append(loginInput); //Додаємо елемент "Логіна" в дерево DOM
regInputDiv.append(emailnInput);  //Додаємо елемент "Пошти" в дерево DOM
regInputDiv.append(passwordInput); //Додаємо елемент "Пароля" в дерево DOM