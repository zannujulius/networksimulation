var N4G = document.querySelector(".fourg");
var gsm = document.querySelector(".gsm");
var lte = document.querySelector(".lte");
var fiveg = document.querySelector(".fiveg");
var rf = document.querySelector(".rf");
var pulse = document.querySelector(".pulse");
var nvalue = document.querySelectorAll(".n-value");
var changepulse;

function getRandomArbitrary(min, max) {
  return String(Math.floor(Math.random() * (max - min) + min));
}

setInterval(() => {
  nvalue.forEach((i) => {
    i.textContent = getRandomArbitrary(0, 1000);
  });
}, 2000);

function update(element, distance) {
  var width = 1;
  var identity = setInterval(scene, 200);
  function scene() {
    if (width >= distance) {
      clearInterval(identity);
      return update(element, distance);
    } else {
      width++;
      element.style.width = width + "%";
    }
  }
}

function one1() {
  N4G.style.width = "100%";
  update(gsm, 15);
  update(lte, 35);
  update(fiveg, 45);
  update(rf, 85);
}

function two1() {
  gsm.style.width = "100%";
  update(N4G, 15);
  update(lte, 35);
  update(fiveg, 45);
  update(rf, 85);
}

pulse.addEventListener("click", () => {
  setInterval(() => {
    two1();
  }, 2000);
});
