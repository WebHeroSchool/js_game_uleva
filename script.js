const pushbutton = document.getElementById("button");
const level = document.getElementById("level__list");
const wrapperGame = document.querySelector(".game");

let levels = document.querySelectorAll(".beginning__level_element");

levels.forEach((level) => {
  level.addEventListener("click", () => {
    levels.forEach((lvl) => lvl.classList.remove("active_game"));
    level.classList.add("active_game");
    document.getElementById("rhomb").style.display = "none";
  });
});

//создание карт
let renderCard = (number) => {
  for (let i = 0; i < number; i++) {
    let card = document.createElement("div");
    let cardInner = document.createElement("div");
    let cardFront = document.createElement("div");
    let cardBack = document.createElement("div");

    card.className = "flip-card";
    wrapperGame.appendChild(card);

    cardInner.className = "flip-card__inner";
    card.appendChild(cardInner);

    cardFront.className = "flip-card__front";
    cardInner.appendChild(cardFront);

    cardBack.className = "flip-card__back";
    cardInner.appendChild(cardBack);

    let rotate = () => {
      let random = Math.random();
      let randomNumber = Math.floor(random * number);
      let cardsBack = document.querySelectorAll(".flip-card__back");
      cardsBack.forEach((card, i) => {
        if (i === randomNumber) {
          card.classList.add("flip-card__back-bug");
        }
      });
      cardInner.classList.toggle("rotate");
      let cards = document.querySelectorAll(".flip-card");
      cards.forEach((card) => card.addEventListener("click", clearingCards));
    };
    card.addEventListener("click", rotate);
  }
};

//выбор уровня для генерации карт
let chooseLevel = (level) => {
  switch (level) {
    case "Простой":
      renderCard(3);
      wrapperGame.classList.add("simple");
      break;
    case "Средний":
      renderCard(6);
      wrapperGame.classList.add("middle");
      break;
    case "Сложный":
      renderCard(10);
      wrapperGame.classList.add("hard");
      break;
}};

//начало игры
let beginningGame = () => {
  document.querySelector(".beginning").style.display = "none";
  document.querySelector(".game").style.display = "flex";
  let level = document.querySelector(".active_game").innerHTML;
  chooseLevel(level);
};

pushbutton.addEventListener("click", beginningGame);

//очещение поля после игры
let clearingCards = () => {
  document.querySelector(".beginning").style.display = "block";
  wrapperGame.style.display = "none";
  wrapperGame.innerHTML = "";
  wrapperGame.className = "game";
  document.getElementById("rhomb").style.display = "initial";
  levels.forEach((lvl) => lvl.classList.remove("active_game"));
};
