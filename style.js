let temp = false;
let temp2 = true;

//magic of event bubbling

document.body.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".RGB")) {
        if (temp === false) {
            document.querySelector(".one").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".one").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".HSL")) {
        if (temp === false) {
            document.querySelector(".two").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".two").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".Hex")) {
        if (temp === false) {
            document.querySelector(".three").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".three").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".HWB")) {
        if (temp === false) {
            document.querySelector(".four").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".four").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".colname")) {
        if (temp === false) {
            document.querySelector(".five").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".five").style.display = "none";
            temp = false;
        }
    }
    else {
        if (e.target === document.querySelector("button")) {
            deafault();
        }
    }


    if (e.target === document.querySelector(".response")) {
        if(temp2 === true){
            document.querySelector(".box").style.transform = 'translateX(0rem)';
            document.querySelector(".ul").style.borderBottomLeftRadius = "0px";
            document.querySelector(".response").textContent = "X"
            temp2 = false;
        }else{
            document.querySelector(".box").style.transform = 'translateX(-10rem)';
            document.querySelector(".ul").style.borderBottomLeftRadius = "10px";
            document.querySelector(".response").textContent = "|||"
            temp2 = true;
        }
    }

    //for manu events

    if (e.target === document.querySelector(".MRGB")) {
        if (temp === false) {
            document.querySelector(".one").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".one").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".MHSL")) {
        if (temp === false) {
            document.querySelector(".two").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".two").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".MHex")) {
        if (temp === false) {
            document.querySelector(".three").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".three").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".MHWB")) {
        if (temp === false) {
            document.querySelector(".four").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".four").style.display = "none";
            temp = false;
        }
    }
    else if (e.target === document.querySelector(".Mcolname")) {
        if (temp === false) {
            document.querySelector(".five").style.display = "block";
            temp = true;
        } else {
            document.querySelector(".five").style.display = "none";
            temp = false;
        }
    }
    else {
        if (e.target === document.querySelector("button")) {
            deafault();
        }
    }
    


    

        if (e.target === document.querySelector("button")) {
            if (temp === true && document.querySelector(".one").style.display === "block") {
                forChangeRgb();
            }
            if (temp === true && document.querySelector(".two").style.display === "block") {
                forChangHsl();
            }
            if (temp === true && document.querySelector(".three").style.display === "block") {
                forChangHex();
            }
            if (temp === true && document.querySelector(".four").style.display === "block") {
                forChangHwb();
            }
            if (temp === true && document.querySelector(".five").style.display === "block") {
                forChangeByName();
            }
    }
})



function forChangeRgb() {
    const rgbColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    document.querySelector(".current-rgb-color").textContent = rgbColor;
    document.body.style.backgroundColor = document.querySelector(".current-rgb-color").textContent;
}
function forChangHsl() {
    const hslColor = `hsl(${Math.floor(Math.random() * 360)},${Math.floor(Math.random() * 100)}%,${Math.floor(Math.random() * 100)}%)`;
    document.querySelector(".current-hsl-color").textContent = hslColor;
    document.body.style.backgroundColor = document.querySelector(".current-hsl-color").textContent;
}
function forChangHwb() {
    const hwbColor = `hwb(${Math.floor(Math.random() * 360)} ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%)`;
    document.querySelector(".current-hwb-color").textContent = hwbColor;
    document.body.style.backgroundColor = document.querySelector(".current-hwb-color").textContent;
}
function forChangHex() {
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    const hexColor = `#${value[Math.floor(Math.random() * 16)]}${value[Math.floor(Math.random() * 16)]}${value[Math.floor(Math.random() * 16)]}${value[Math.floor(Math.random() * 16)]}${value[Math.floor(Math.random() * 16)]}${value[Math.floor(Math.random() * 16)]}`;
    document.querySelector(".current-hex-color").textContent = hexColor;
    document.body.style.backgroundColor = document.querySelector(".current-hex-color").textContent;
}
function forChangeByName() {
    const colorsArray = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "Gray", "Turquoise", "Cyan", "Magenta", "Lavender", "Teal", "Indigo", "Olive", "Violet", "Maroon", "Beige", "Navy", "Gold", "Silver", "Aqua", "Fuchsia", "Plum", "Charcoal", "Crimson", "Lime"];
    const colors = colorsArray[Math.floor(Math.random() * 30)]
    document.querySelector(".current-color").textContent = colors;
    document.body.style.backgroundColor = document.querySelector(".current-color").textContent;
}
function deafault() {
    const dcolorArray = ["red", "blue", "green", "yellow", "orange", "pink", "white"]
    const dcolors = dcolorArray[Math.floor(Math.random() * 7)];
    document.querySelector(".current-color").textContent = dcolors;
    document.body.style.backgroundColor = dcolors;
}
 

