// Select all the drum elements and add event listener
// Add animation to button
// Play music()

const animate = (key) => {
  if (
    key == "w" ||
    key == "a" ||
    key == "s" ||
    key == "d" ||
    key == "j" ||
    key == "k" ||
    key == "l"
  ) {
    const currentKey = document.querySelector(`.${key}`);
    currentKey.classList.add("pressed");
    setTimeout(() => {
      currentKey.classList.remove("pressed");
    }, 250);
  }
};

const playMusic = (path) => {
  const audio = new Audio(path);
  audio.play();
};

// for keyboard
document.addEventListener("keypress", (event) => {
  const triggeredKey = event.key;
  makeSound(triggeredKey);
  animate(triggeredKey);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      playMusic("sounds/sound-1.mp3");
      break;
    case "a":
      playMusic("sounds/sound-2.mp3");
      break;
    case "s":
      playMusic("sounds/sound-3.mp3");
      break;
    case "d":
      playMusic("sounds/sound-4.mp3");
      break;
    case "j":
      playMusic("sounds/sound-5.mp3");
      break;
    case "k":
      playMusic("sounds/sound-6.mp3");
      break;
    case "l":
      playMusic("sounds/sound-7.mp3");
      break;
  }
};

const handleDrumClick = (event) => {
  var innerHTML = event.target.innerHTML;
  animate(innerHTML);
  makeSound(innerHTML);
};

var drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleDrumClick);
}
