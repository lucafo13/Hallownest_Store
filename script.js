const m3 = document.getElementById("m3");
const m2 = document.getElementById("m2");
const m1 = document.getElementById("birth");
const button = document.getElementById("msbutton");
button.addEventListener("click", function () {
  if (m1.paused) {
    m1.play();
    button.innerText = "Pausar Música";
  } else {
    m1.pause();
    button.innerText = "Música de fundo";
  }
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
function reveal() {
  const elefante = document.querySelectorAll(".scroll");
  elefante.forEach((ele) => {
    pos = ele.getBoundingClientRect().top;

    if (pos < window.innerHeight - 50) {
      ele.classList.add("sled");
    }
  });
}
function compra(nome) {
  alert(nome + "foi adicionado a sua mochila...");
}
const btn = document.querySelectorAll("a");

btn.forEach((btns) => {
  btns.addEventListener("click", function () {
    const m4 = document.getElementById("m4");
    m4.play();
  });
});
const linkout = document.getElementById("linkout");
linkout.addEventListener("click", function () {
  document.body.classList.add("out");
  setTimeout(() => {
    window.location.href = "pages/grimm.html";
  }, 1000);
});
let carrin = [];
let contagi = 0;

function addcartbomb(nome, preco) {
  carrin.push({ nome, preco });
  contagi++;

  document.getElementById("contador").innerText = contagi;
  atualizacaodalistamaisgay();
}

function atualizacaodalistamaisgay() {
  let listinha = document.getElementById("listacarrobomba");
  listinha.innerHTML = "";

  carrin.forEach((item) => {
    listinha.innerHTML += `<p>${item.nome} - ${item.preco} geo</p>`;
  });
}

document.getElementById("carrobomba").onclick = () => {
  let listinha = document.getElementById("listacarrobomba");

  listinha.style.display = listinha.style.display == "block" ? "none" : "block";
};
function sumisso() {
  m1.pause();
  let audio = document.getElementById("pain");
  audio.play();
  let tela = document.createElement("div");
  tela.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 90px;
    z-index: 999999;
    opacity: 0;
    transition: opacity 2s ease;
  `;
  tela.innerHTML = "<h1>Vazio.</h1>";
  document.body.appendChild(tela);
  setTimeout(() => {
    tela.style.opacity = "1";
  }, 50);
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 180000);
}
