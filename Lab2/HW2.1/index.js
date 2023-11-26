const handleClick = (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
    playDrumSound(event.target.innerText);
    animateButton(event.target.innerText);
  };
  
  const drumButtons = document.querySelectorAll("button");
  drumButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  
  document.addEventListener("keypress", handleKeyboardEvent);
  
  const handleKeyboardEvent = (event) => {
    console.log(event.key);
    playDrumSound(event.key);
    animateButton(event.key);
  };
  
  const playDrumSound = (key) => {
    switch (key) {
      case "w":
        new Audio("Sounds/tom-1.mp3").play();
        break;
      case "a":
        new Audio("Sounds/tom-2.mp3").play();
        break;
      case "s":
        new Audio("Sounds/snare.mp3").play();
        break;
      case "d":
        new Audio("Sounds/tom-4.mp3").play();
        break;
      case "j":
        new Audio("Sounds/crash.mp3").play();
        break;
      case "k":
        new Audio("Sounds/tom-3.mp3").play();
        break;
      case "l":
        new Audio("Sounds/kick-bass.mp3").play();
        break;
      default:
        break;
    }
  };
  
  const animateButton = (key) => {
    const activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    document.body.classList.add("modify-body");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
      document.body.classList.remove("modify-body");
    }, 200);
  };
  