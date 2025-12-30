const button = document.getElementById("submitBtn");
const buffer = document.getElementById("buffer");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  // Reset
  result.innerText = "";
  buffer.classList.remove("hidden");

  button.disabled = true;
  button.innerText = "Calculating 🤯";

  // Buffer delay (3 seconds)
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 51) + 50;

    buffer.classList.add("hidden");
    if (randomNumber > 60) {
      result.innerText = `🚑 Mental Score ${randomNumber}  
মাথা আছে, কিন্তু warranty শেষ 🤡
`;
    } else {
      result.innerText = `🎉 অভিনন্দন!  
Mental Score ${randomNumber}, মাথা আজ কাজ করছে 🤪
`;
    }

    button.disabled = false;
    button.innerText = "Submit";
  }, 3000);
});
