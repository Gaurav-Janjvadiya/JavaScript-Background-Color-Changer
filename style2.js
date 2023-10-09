const mainButton = document.querySelector("button");
const body = document.body;
const currentcolor = document.querySelector(".current-color");
const rgb = document.querySelector(".RGB");
const hsl = document.querySelector(".HSL");
const hex = document.querySelector(".Hex");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const chsl = document.querySelector(".current-hsl-color");
const crgb = document.querySelector(".current-rgb-color");
const chex = document.querySelector(".current-hex-color");


function firstBtn() {
    function randomColorGenerator() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `RGB(${red},${green},${blue})`;
        return randomColor;
    }
    mainButton.addEventListener("click", () => {
        const randomColor = randomColorGenerator();
        body.style.backgroundColor = randomColor;
        crgb.textContent = randomColor;
    })
}

function secBtn() {
    function forChangeHSL() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 101);
        const lightness = Math.floor(Math.random() * 101);
        const fullhsl = `HSL(${hue},${saturation}%,${lightness}%)`;
        return fullhsl;
    }

    mainButton.addEventListener("click", () => {
        const fullhsl = forChangeHSL();
        body.style.backgroundColor = fullhsl;
        chsl.textContent = fullhsl;
    })
}

function thirdBtn() {
    function changeHashes() {
        const hashval = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        const randomval1 = hashval[Math.floor(Math.random() * 16)];
        const randomval2 = hashval[Math.floor(Math.random() * 16)];
        const randomval3 = hashval[Math.floor(Math.random() * 16)];
        const randomval4 = hashval[Math.floor(Math.random() * 16)];
        const randomval5 = hashval[Math.floor(Math.random() * 16)];
        const randomval6 = hashval[Math.floor(Math.random() * 16)];
        const HexaDes = `#${randomval1}${randomval2}${randomval3}${randomval4}${randomval5}${randomval6}`;
        return HexaDes;
    }
    mainButton.addEventListener("click", () => {
        const fullhex = changeHashes();
        body.style.backgroundColor = fullhex;
        chex.textContent = fullhex;
    })
}

function deafaultColors() {
    const generalColors = ["white","red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black", "white", "teal", "turquoise", "gold", "silver", "beige", "maroon", "navy", "lavender", "coral"];
    const color = generalColors[Math.floor(Math.random() * 21)];
    body.style.backgroundColor = color;
}



rgb.addEventListener("click", () => {
    one.style.display = "block";
    firstBtn();
})
hsl.addEventListener("click", () => {
    two.style.display = "block";
    secBtn();
})
hex.addEventListener("click", () => {
    three.style.display = "block";
    thirdBtn();
})
mainButton.addEventListener("click",()=>{
    deafaultColors();
})


