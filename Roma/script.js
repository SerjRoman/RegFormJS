const block = document.querySelector(".text");
const block_button = document.querySelector(".button");

const messageDiv1 = document.createElement("div");
messageDiv1.innerHTML = "fffffffffffffff";
messageDiv1.className = "notification";
messageDiv1.style.backgroundColor = "blue";
block.append(messageDiv1);

const messageDiv2 = document.createElement("div");
messageDiv2.innerHTML = "aaaaaaaaaaaaaaaaaaaaaaaaa";
messageDiv2.className = "notification";
messageDiv2.style.backgroundColor = "red";
block.append(messageDiv2);

const messageDiv3 = document.createElement("div");
messageDiv3.innerHTML = "bbbbbbbbbbbbbbbbbbbb";
messageDiv3.className = "notification";
messageDiv3.style.backgroundColor = "black";
block.append(messageDiv3);

const messageDiv4 = document.createElement("div");
messageDiv4.innerHTML = "rrrrrrrrrrrrrrrrrrrrrrrrr";
messageDiv4.className = "notification";
messageDiv4.style.backgroundColor = "green";
block_button.append(messageDiv4);