let questionsArr = [
  {
    q: "console.log(Boolean(null))",
    answer: false,
  },
  {
    q: "console.log(false && 1 && [])",
    answer: false,
  },
  {
    q: "console.log(!!1)",
    answer: true,
  },
  {
    q: "['', 0, null, undefined, NaN, false]",
    answer: false,
  },
  {
    q: "console.log(Boolean(undefined))",
    answer: false,
  },
  {
    q: '1 == "1"',
    answer: true,
  },
];
class Quiz {
  constructor(questionsArr) {
    this._btn = document.querySelectorAll(".btn");
    this._questions = document.querySelector(".questions");
    this.questionsCount = 0;
    this.questionsArr = questionsArr;
  }
  questions() {
    this._questions.textContent = this.questionsArr[this.questionsCount].q;
  }

  createTolltips(elem) {
    let tolltip = document.createElement("div");
    tolltip.classList.add("tooltip");

    let tolltipTitle = document.createElement("div");
    let toltipMain = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = "HI";
    p.style.textAlign = "center";
    toltipMain.textContent = "No Bro";
    toltipMain.style.textAlign = "center";
    p.style.margin = 0 + "px";

    tolltipTitle.style.backgroundColor = "red";

    tolltipTitle.appendChild(p);
    tolltip.appendChild(tolltipTitle);
    tolltip.appendChild(toltipMain);

    document.body.appendChild(tolltip);

    let { height, top, left, right, width } = elem.getBoundingClientRect();
    tolltip.style.position = "absolute";

    tolltip.style.height = height * 1.5 + "px";
    tolltip.style.left = left + "px";
    tolltip.style.width = width + "px";
    tolltip.style.top = top - height * 1.7 + "px";
    tolltip.style.backgroundColor = "gray";
  }
  btnClick() {
    this._questions.textContent = this.questionsArr[this.questionsCount].q;

    let level = [...document.querySelector(".for").children];
    let levelCount = 0;

    this._btn.forEach((el) => {
      el.addEventListener("click", (event) => {
        const tolltip = document.querySelector(".tooltip");
        if (
          event.target.classList.contains("false") &&
          this.questionsArr[this.questionsCount].answer == true
        ) {
          this.createTolltips(event.target);
        }
        if (
          event.target.classList.contains("true") &&
          this.questionsArr[this.questionsCount].answer == false
        ) {
          console.log(this.questionsArr[this.questionsCount].answer);
          this.createTolltips(event.target);
        }

        if (this.questionsCount === this.questionsArr.length - 1) {
          this.questionsCount = 0;
          this._questions.textContent =
            this.questionsArr[this.questionsCount].q;
          levelCount = 0;
          level.forEach((el) => (el.style = "color:white"));
        }

        if (
          event.target.classList.contains("false") &&
          this.questionsArr[this.questionsCount].answer == false
        ) {
          this._questions.textContent =
            this.questionsArr[++this.questionsCount].q;
          level[levelCount].style = "color:blue";
          ++levelCount;
          if (tolltip != null) {
            tolltip.remove();
          }
        }
        if (
          event.target.classList.contains("true") &&
          this.questionsArr[this.questionsCount].answer == true
        ) {
          this._questions.textContent =
            this.questionsArr[++this.questionsCount].q;
          level[levelCount].style = "color:blue";
          ++levelCount;
          if (tolltip != null) {
            tolltip.remove();
          }
        }
      });
    });
  }
}

new Quiz(questionsArr).questions();
new Quiz(questionsArr).btnClick();
