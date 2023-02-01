// ON LOAD

const gridEl = document.getElementById("grid");

play.addEventListener(
    "click",
    function () {
        gridGenerator(gridEl);
    }
)


// FUNCTIONS

function gridGenerator(gridEL) {

    const whiteList = [];

    for (i = 0; i < 100; i++); {
        whiteList.push(i + 1);
    }

    console.log(whiteList);

    for (i = 0; i < 100; i++) {
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");

        squareEl.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
            }
        )

        gridEL.append(squareEl);
    }
}