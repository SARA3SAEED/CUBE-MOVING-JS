
let count = 10;
let previousDiv = null;
let leftPosition = 0;
let intervalId = setInterval(createDiv, 2000);

function createDiv() {
    if (count === 0) {
        clearInterval(intervalId);
    } else {
        // Remove the previous cube if it exists
        if (previousDiv) {
            document.body.removeChild(previousDiv);
        }

        let div1 = document.createElement("div");
        div1.style.cssText = `position: absolute; left: ${leftPosition}px;  background-color: black; height: 100px; width: 100px`;
        
        document.body.appendChild(div1);
        previousDiv = div1;
        leftPosition += 20;  
        count--;
    }
}

