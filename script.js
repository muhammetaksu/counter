let counter = 0;
let counterDom = document.querySelector("#counter");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");
let resetDom = document.querySelector("#reset");

counterDom.value = counter;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);
resetDom.addEventListener("click", clickEvent);

function clickEvent() {
    console.log(this.id);
    if (this.id == "increase") {
        counter += 1;
    } else if (this.id == "decrease") {
        counter -= 1;
    } else if (this.id == "reset") {
        counter = 0;
    }
    counterDom.value = counter;
    counterColor();
}

let counterColor = () => {
    if (counterDom.value < 0) {
        counterDom.style.color = "red";
    } else if (counterDom.value > 0) {
        counterDom.style.color = "green";
    } else if (counterDom.value == 0) {
        counterDom.style.color = "black";
    }
};
