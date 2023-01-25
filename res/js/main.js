const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const info = document.getElementById("info");
const otazky = document.getElementById("otazky");
const pravidla = document.getElementById("pravidla");
const back = document.getElementById("back");
const check = document.getElementById("check");
const another = document.getElementById("another");
const result = document.getElementById("result");
const cas = document.getElementById("cas");
const timer = document.getElementById("timer");
const container = document.getElementById("container");
const round = document.getElementById("round");
const kahoot = document.getElementById("kahoot");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const quiz1 = document.getElementById("quiz1");
const question = document.getElementById("question");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const option = document.getElementsByClassName("option");
const celebrate = document.getElementById("celebrate");
const end = document.getElementById("end");
const thank = document.getElementById("thank");
const mrbeat = document.getElementById("mrbeat");
let id = 0;
let kolo = 1;

const Questions = [
  {
    id: 0,
    q: "Jaký kabel má 12V v počítači?",
    a: [
      { text: "Žlutý", isCorrect: true },
      { text: "Červený", isCorrect: false },
      { text: "Zelený", isCorrect: false },
      { text: "Oranžový", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Jaká základní deska má největší rozměr?",
    a: [
      { text: "micro ATX", isCorrect: false },
      { text: "EATX", isCorrect: true },
      { text: "ATX", isCorrect: false },
      { text: "mini ITX", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "Jaká pamět je v procesoru?",
    a: [
      { text: "VRAM", isCorrect: false },
      { text: "DRAM", isCorrect: false },
      { text: "SRAM", isCorrect: true },
      { text: "GDDR", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Který datový typ je univerzální?",
    a: [
      { text: "var", isCorrect: true },
      { text: "char", isCorrect: false },
      { text: "boolean", isCorrect: false },
      { text: "double", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Jaký příkaz při kliknutí provede určitou funkci?",
    a: [
      { text: "onclick", isCorrect: true },
      { text: "onlick", isCorrect: false },
      { text: "onslick", isCorrect: false },
      { text: "addclick", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Jaký video port může napájet 3 monitory najednou?",
    a: [
      { text: "DVI", isCorrect: false },
      { text: "HDMI", isCorrect: false },
      { text: "VGA", isCorrect: false },
      { text: "Display port", isCorrect: true },
    ],
  },
  {
    id: 6,
    q: "Jak se správně zapisuje pole",
    a: [
      { text: "int array = new int[];", isCorrect: false },
      { text: "int[] array = new int[];", isCorrect: true },
      { text: "int array[] = new int;", isCorrect: false },
      { text: "array[] = new int[];", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Co patří do interpretovaného programovacího jazyka?",
    a: [
      { text: "Java", isCorrect: false },
      { text: "C++", isCorrect: false },
      { text: "C#", isCorrect: false },
      { text: "Python", isCorrect: true },
    ],
  },
  {
    id: 8,
    q: "Co spouští programy v jazyce java?",
    a: [
      { text: "JDK", isCorrect: false },
      { text: "JRE", isCorrect: false },
      { text: "JIT", isCorrect: false },
      { text: "JVM", isCorrect: true },
    ],
  },
  {
    id: 9,
    q: "Do jakého typu operátoru patří ++?",
    a: [
      { text: "Inkrementační a dekrementační", isCorrect: true },
      { text: "Aritmetické", isCorrect: false },
      { text: "Logické", isCorrect: false },
      { text: "Přiřazovací", isCorrect: false },
    ],
  },  
  {
    id: 10,
    q: "",
    a: [
      { text: "Na Zimu", isCorrect: false },
      { text: "Na Jaře", isCorrect: false },
      { text: "Na Podzim", isCorrect: true },
      { text: "Na Léto", isCorrect: false },
    ],
  },  
];

let selected = "";

function time() {
  let sekundy = 60;
  let timer = setInterval(function () {
    cas.innerHTML = +sekundy;
    sekundy--;
    if (sekundy < 0 || another.style.display == "block") {
      clearInterval(timer);
      result.style.display = "block";
      another.style.display = "block";
      check.style.display =  "none";
      op1.disabled = true;
      op2.disabled = true;
      op3.disabled = true;
      op4.disabled = true;
      if (selected == "true") {
        result.innerHTML = "Správně";
        result.style.backgroundColor = "green";
        result.style.color = "white";
        correct.play();
        correct.volume = 0.2;
      } else {
        result.innerHTML = "Špatně";
        result.style.backgroundColor = "red";
        result.style.color = "white";
        wrong.play();
        wrong.volume = 0.2;
      }
    }
  }, 1000);
}

function timestop() {
  setInterval(function () {
    if (another.style.display == "block") {
      clearInterval(timer);
    }
  }, 1);
}

start.onclick = () => {
  time();
  mrbeat.pause();
  kahoot.play();
  kahoot.volume = 0.2;
  start.style.display = "none";
  info.style.display = "none";
  welcome.style.display = "none";
  check.style.display = "block";
  quiz1.style.display = "block";
  timer.style.display = "block";
  round.style.display = "block";
  document.body.style.background = "purple";
  document.body.style.transition = "0s";
  question.innerText = Questions[id].q;
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
};

info.onclick = () => {
  welcome.style.display = "none";
  start.style.display = "none";
  info.style.display = "none";
  otazky.style.display = "block";
  back.style.display = "block";
  document.body.style.background = "purple";
  document.body.style.transition = "2s";
  mrbeat.pause();
};

op1.onclick = () => {
  op1.style.backgroundColor = "orange";
  op2.style.backgroundColor = "white";
  op3.style.backgroundColor = "white";
  op4.style.backgroundColor = "white";
  selected = op1.value;
};

op2.onclick = () => {
  op1.style.backgroundColor = "white";
  op2.style.backgroundColor = "orange";
  op3.style.backgroundColor = "white";
  op4.style.backgroundColor = "white";
  selected = op2.value;
};

op3.onclick = () => {
  op1.style.backgroundColor = "white";
  op2.style.backgroundColor = "white";
  op3.style.backgroundColor = "orange";
  op4.style.backgroundColor = "white";
  selected = op3.value;
};

op4.onclick = () => {
  op1.style.backgroundColor = "white";
  op2.style.backgroundColor = "white";
  op3.style.backgroundColor = "white";
  op4.style.backgroundColor = "orange";
  selected = op4.value;
};

check.onclick = () => {
  another.style.display = "block";
  check.style.display = "none";
  op1.disabled = true;
  op2.disabled = true;
  op3.disabled = true;
  op4.disabled = true;
  timestop();

  if (selected == "true") {
    result.innerHTML = "Správně";
    result.style.backgroundColor = "green";
    result.style.color = "white";
    correct.play();
    correct.volume = 0.2;
  } else {
    result.innerHTML = "Špatně";
    result.style.backgroundColor = "red";
    result.style.color = "white";
    wrong.play();
    wrong.volume = 0.2;
  }
  result.style.display = "block";

  if (id == 0) {
    op1.style.backgroundColor = "green";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
  }
  if (id == 1) {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "green";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
  }
  if (id == 2) {
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "green";
    op4.style.backgroundColor = "red";
  }
  if (id == 3) {
    op1.style.backgroundColor = "green";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
  }
  if(id == 4){
    op1.style.backgroundColor = "green";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
  }
  if(id == 5){
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "green";
  }
  if(id == 6){
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "green";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
  }
  if(id == 7){
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "green";
  }
  if(id == 8){
    op1.style.backgroundColor = "red";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "green";
  }
  if(id == 9){
    op1.style.backgroundColor = "green";
    op2.style.backgroundColor = "red";
    op3.style.backgroundColor = "red";
    op4.style.backgroundColor = "red";
  }
};

back.onclick = () => {
  welcome.style.display = "block";
  start.style.display = "block";
  info.style.display = "block";
  otazky.style.display = "none";
  back.style.display = "none";
  document.body.style.background = "url(./res/img/mrbeast.gif)";
  document.body.style.transition = "2s";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  mrbeat.play();
  mrbeat.volume = 0.1;
  mrbeat.currentTime = 0;
};

another.onclick = () => {
  id++;
  kolo++;
  round.innerHTML = `${kolo}/10`;
  time();
  another.style.display = "none";
  result.style.display = "none";
  check.style.display = "block";
  op1.style.backgroundColor = "white";
  op2.style.backgroundColor = "white";
  op3.style.backgroundColor = "white";
  op4.style.backgroundColor = "white";
  op1.disabled = false;
  op2.disabled = false;
  op3.disabled = false;
  op4.disabled = false;
  selected = "false";

  if(id >= 0 && id >! 10){
  question.innerText = Questions[id].q;
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
  }

  if (id == 10) {
    quiz1.style.display = "none";
    timer.style.display = "none";
    check.style.display = "none";
    another.style.display = "none";
    round.style.display = "none";
    celebrate.style.display = "block";
    thank.style.display = "block";
    end.play();
    end.volume = 0.2;
    kahoot.pause();
  }
};

window.onload = () => {
  mrbeat.play();
  mrbeat.volume = 0.1;
}