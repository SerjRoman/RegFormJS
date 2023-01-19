const tipFirstDiv = document.createElement('div');
const tipSecondDiv = document.createElement('div');
const tipThirdDiv = document.createElement('div');
const buttonDiv = document.createElement('div');
// username
tipFirstDiv.innerHTML = "Your username. Don't write your real name. Your username will be visible to all users. For example: Uniboard635"
tipFirstDiv.style.backgroundColor = 'GreenYellow';
tipFirstDiv.className = "username-tip tips";
// email
tipSecondDiv.innerHTML = "Your email. Before writing, make sure you have access to your email to confirm account creation. For example: consolelogin12@gmail.com"
tipFirstDiv.style.backgroundColor = 'Chartreuse';
tipFirstDiv.className = "email-tip tips";
// password
tipThirdDiv.innerHTML = "Your password. For security, the password will be hidden. It is not recommended to use simple passwords for security. For example: ········"
tipFirstDiv.style.backgroundColor = 'LawnGreen';
tipFirstDiv.className = "password-tip tips";
// button
buttonDiv.innerHTML = 'When you click create an account, you will have to verify your email to create it, otherwise, you will have to change your email to one you have access to.' 
buttonDiv.style.backgroundColor = 'LawnGreen'; 
buttonDiv.className = "button-tip tips"; 
//comments
//const someDiv = document.createElement('div'); //In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
//someDiv.innerHTML = "something"; //The Element interface's innerHTML property sets or gets the HTML or XML markup of child elements.
//someDiv.style.backgroundColor = 'LawnGreen'; //Set a background color for a document.
//someDiv.className = "something"; //The className property is responsible for the value of the element's class attribute.
//trash
// const mainDiv = document.querySelector('.main-block'); The Document method querySelector() returns the first element (Element) of the document that matches the specified selector or group of selectors. If no match is found, returns null.
// const regDiv = document.querySelector('.input-log'); The Document method querySelector() returns the first element (Element) of the document that matches the specified selector or group of selectors. If no match is found, returns null.