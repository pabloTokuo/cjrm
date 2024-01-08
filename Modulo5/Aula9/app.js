const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", () => {
  popup.style.display = "block";
})

popup.addEventListener("click", (event) => {
  const classNameOfClickedELement = event.target.classList.value;
  const classNames = ["popup-close", "popup-wrapper", "popup-link"]

  const shouldClosePopup = classNames.some(className => className === classNameOfClickedELement);
  console.log(shouldClosePopup);


  if(shouldClosePopup) {
    popup.style.display = "none";
  };

})