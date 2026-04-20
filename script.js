function check() {
  let local = window.location.href;
  document.getElementById("s11").addEventListener("click", function () {
    if ((local = "index.html#s1")) {
      alert("vc ja esta nesta area!");
    }
  });
  document.getElementById("s22").addEventListener("click", function () {
    if ((local = "#s2")) {
      alert("vc ja esta nesta area!");
    }
  });
  document.getElementById("s33").addEventListener("click", function () {
    if ((local = "index.html#s3")) {
      alert("vc ja esta nesta area!");
    }
  });
}
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
