const myImage = document.querySelector("img");

// click event handler function
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mountains.png") {
        myImage.setAttribute("src", "images/leopard.png");
    }else{
        myImage.setAttribute("src", "images/mountains.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name"); //prompt function asks user to enter data and stores it in a variable after they click OK
    if (!myName) {
        setUserName();
    }else{
        localStorage.setItem("name", myName); // uses Web Storage API to store data in the browser and retrieve it later
        myHeading.textContent = `Lets go to Grand Teton, ${myName}`;
    }
}

/**
 * initialization code, runs when page first loads
 * If the name data item is not already stored in the browser then run setUserName(), if it does exist then retrieve it and set te heading text content
*/
if (!localStorage.getItem("name")) {
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Lets go to Grand Teton, ${storedName}`;
}

//click event handler function to "New User button", when clicked allows the user to store a different name
myButton.addEventListener("click", () => {
    setUserName();
});