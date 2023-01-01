const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const under = document.querySelector("#under");
const under1 = document.querySelector("#under1");

under.addEventListener("click", () => {
  if (under1.classList.contains("hidden")) {
    under1.classList.remove("hidden");
  } else {
    under1.classList.add("hidden");
  }
});
