// Write your code here!
const mainElement = document.querySelector("main")

mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = 'Your Header Text Here';
newHeader.id = 'victory';
newHeader.textContent = 'levy is the champion';
document.body.appendChild(newHeader);




