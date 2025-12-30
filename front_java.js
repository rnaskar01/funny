const button = document.getElementById("submitBtn");
const buffer = document.getElementById("buffer");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  // Reset
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  result.innerText = "";
  buffer.classList.remove("hidden");

  button.disabled = true;
  button.innerText = "Calculating 🤯";

  // Buffer delay (3 seconds)
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 51) + 50;

    buffer.classList.add("hidden");
    if (!name || !age) {
      result.innerText = `😂 Oye! Pehle naam aur age bhar!`;
    }
    else if (randomNumber > 60) {
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
