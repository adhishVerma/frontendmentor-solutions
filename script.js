

const screen = document.querySelector("#screen");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      screen.innerHTML[screen.innerHTML.length - 1] === "." &&
      e.target.innerHTML === "/"
    ) {
    } else {
      if (screen.innerHTML === "0" && Number(e.target.innerHTML)) {
        screen.innerHTML = e.target.innerHTML;
      } else {
        screen.innerHTML += e.target.innerHTML;
      }
    }
  });
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
  screen.innerHTML = 0;
});

const del = document.querySelector("#del");

del.addEventListener("click", (e) => {
  if (screen.innerHTML === "0") {
    screen.innerHTML = 0;
  } else {
    newText = screen.innerHTML;
    screen.innerHTML = newText.slice(0, newText.length - 1);
  }
});

const result = document.querySelector("#result");

result.addEventListener("click", (e) => {
  screen.innerHTML = eval(screen.innerHTML.replace("x", "*"));
});

const toggleSwitch = document.querySelectorAll('.slide-container input[type="radio"]')

const switchTheme = (e) => {
    document.documentElement.setAttribute('data-theme', e.target.id)
    localStorage.setItem('theme', e.target.id);
}

toggleSwitch.forEach((element) => {
    element.addEventListener('click', (e) => switchTheme(e))
})

if(localStorage.getItem('theme')){
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
}
