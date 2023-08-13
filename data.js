//===================
//  Variable
//===================

let Color = [];
let CorrectColor;
let Size = 9;

//===================
//    Selectors
//===================
const head = document.querySelector("h1");
const currentcolor = document.querySelector("#currectcolor");
const square = document.querySelectorAll(".square");
const again = document.querySelector("#again");
const message = document.querySelector("#message");
const easybutton = document.querySelector("#easybutton");
const hardbutton = document.querySelector("#hardbutton");
const mediumbutton = document.querySelector("#mediumbutton");

//===================
//    Function
//===================
const GernateColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const PickColor = () => {
  const index = Math.floor(Math.random() * Color.length);
  return Color[index];
};

const GernateRandomColor = (num) => {
  let output = [];

  for (i = 0; i < num; i++) {
    output.push(GernateColor());
  }

  return output;
};

const SetAllColor = (Correct) => {
  square.forEach((element) => {
    element.style.backgroundColor = Correct;
  });
  head.style.backgroundColor = Correct;
};

//===================
//      Main
//===================

Color = GernateRandomColor(Size);
CorrectColor = PickColor();
currentcolor.textContent = CorrectColor;

again.addEventListener("click", function () {
  Color = GernateRandomColor(Size);
  CorrectColor = PickColor();
  currentcolor.textContent = CorrectColor;

  for (i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = Color[i];
  }
  head.style.backgroundColor = "steelblue";
  message.textContent = null;
});

easybutton.addEventListener("click", function () {
  this.classList.add("selected");
  hardbutton.classList.remove("selected");
  mediumbutton.classList.remove("selected");
  Size = 3;
  Color = GernateRandomColor(Size);
  CorrectColor = PickColor();
  currentcolor.textContent = CorrectColor;

  for (i = 0; i < Size; i++) {
      square[i].style.backgroundColor = Color[i];
  }

  for(i=0; i < square.length-Size; i++){
    square[i+3].style.display = "none";
  }
  head.style.backgroundColor = "steelblue";
  message.textContent = null;
});

mediumbutton.addEventListener("click",function(){
  this.classList.add("selected");
  easybutton.classList.remove("selected");
  hardbutton.classList.remove("selected");
  Size = 6;

  Color = GernateRandomColor(Size);
  CorrectColor = PickColor();
  currentcolor.textContent = CorrectColor;

  for (i = 0; i < Size; i++) {
      square[i].style.backgroundColor = Color[i];
      square[i].style.display = "block";
  }

  for(i = 0;i <square.length-Size;i++){
    square[i+6].style.display = "none";
  }
  head.style.backgroundColor = "steelblue";
  message.textContent = null;
})


hardbutton.addEventListener("click", function () {
  this.classList.add("selected");
  easybutton.classList.remove("selected");
  mediumbutton.classList.remove("selected");
  Size = 9;

  Color = GernateRandomColor(Size);
  CorrectColor = PickColor();
  currentcolor.textContent = CorrectColor;

  for (i = 0; i < square.length; i++) {
    if (Color[i]) {
      square[i].style.backgroundColor = Color[i];
      square[i].style.display = "block";
    }
  }
  head.style.backgroundColor = "steelblue";
  message.textContent = null;
});

for (i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = Color[i];
  square[i].addEventListener("click", function () {
    selectcolor = this.style.backgroundColor;

    if (CorrectColor === selectcolor) {
      SetAllColor(CorrectColor);
      message.textContent = "Correct :-)";
    } else {
      this.style.backgroundColor = "black";
      message.textContent = "You suck !";
    }
  });
}
