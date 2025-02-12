//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";
document.querySelector("img").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    console.log(mySrc);
    if (mySrc === "img/mozila.jpg") {
        myImage.setAttribute("src", "img/mozila1.jpg");
    } else {
        myImage.setAttribute("src", "img/mozila.jpg");
    }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
});




