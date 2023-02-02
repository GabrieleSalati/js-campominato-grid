// ON LOAD

const startButton = document.getElementById("play");

play.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        const difficultyEl = document.getElementById("difficulty");
        const level = difficultyEl.value;
        console.log(level);

        gridGenerator(gridEl, level);
    }
)


// FUNCTIONS

function gridGenerator(gridEL, level, i) {

    gridEL.innerHTML = "";

    let squareNumber;

    if (level == 1) {
        squareNumber = 100;
    }
    else if (level == 2) {
        squareNumber = 81;
    }
    else {
        squareNumber = 49;
    }

    for (i = 0; i < squareNumber; i++) {
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.innerHTML = i + 1;

        if (level == 1) {
            squareEl.classList.add("square");
        }
        else if (level == 2) {
            squareEl.classList.add("square-med");
        }
        else {
            squareEl.classList.add("square-big");
        }

        squareEl.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
                console.log(this.innerHTML);
            }
        )

        gridEL.append(squareEl);
    }
}