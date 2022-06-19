// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpeg') {
        myImage.setAttribute('src','images/image2.jpeg');
    }
    else {
        myImage.setAttribute('src','images/image1.jpeg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + " is cool";
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ' is cool';
}

myButton.onclick = () => {
    setUserName();
}


