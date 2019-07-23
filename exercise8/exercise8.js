function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    var color = document.getElementById("colors");

    for (var i = 0; i < colors.length; i++) {
        var great = document.createElement("div");
        great.className = "choice";
        great.style.backgroundColor = colors[i];
        color.appendChild(great);
        great.addEventListener("click", select);
    }
}

function select(){
    var clr = this.style.backgroundColor;
    var clk = document.getElementById("selected");
    clk.style.backgroundColor = clr;
    clk.innerHTML = clr;
}

window.onload = function () {
    initGrid();
}