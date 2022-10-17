import {MiniMaple} from "../src/miniMaple";

/*const mmaple = new MiniMaple();
let response = mmaple.diff('x^2 + x, x');
console.log(response);
*/

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const inputFunc = document.getElementById('inputFunc');
    const inputFuncValue = inputFunc.value;
    inputFunc.value = '';
    console.log(inputFuncValue);

    const miniMaple = new MiniMaple();
    let response = miniMaple.diff(inputFuncValue);
    console.log(response);

    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    someDummyDiv.style.margin = '1em 0 0 2em';
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = `${inputFuncValue} ===> ${response}`;
    const container = document.getElementById('container');
    container.insertBefore(someDummyDiv, container.firstChild);
}