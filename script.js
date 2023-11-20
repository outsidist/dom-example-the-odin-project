const redPara = document.createElement('p');
redPara.style.color = 'red';
redPara.textContent = 'Hey, I\'m red!';

const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = 'I\'m a blue h3!';

const blackDivPinkBg = document.createElement('div');
blackDivPinkBg.style.border = '3px solid black';
blackDivPinkBg.style.backgroundColor = 'pink';

const divH1 = document.createElement('h1');
divH1.textContent = 'I\'m in a div';

const anotherPara = document.createElement('p');
anotherPara.textContent = "ME TOO!";


blackDivPinkBg.appendChild(divH1);
blackDivPinkBg.appendChild(anotherPara);

document.body.appendChild(redPara);
document.body.appendChild(blueH3);
document.body.appendChild(blackDivPinkBg);




//DONE a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

