const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://k6vuribxwscwwjpmgnp5mmozqu0hgucz.lambda-url.eu-west-3.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = ` Vous êtes le visiteur numéro ${data} </br> Bienvenue`;
}

updateCounter();
