var N4G = document.querySelector(".fourg");
var gsm = document.querySelector(".gsm");
var lte = document.querySelector(".lte");
var fiveg = document.querySelector(".fiveg");
var rf = document.querySelector(".rf");
var pulse = document.querySelector(".pulse");
var nvalue = document.querySelectorAll(".n-value");
// var changepulse;

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
  var identity = setInterval(scene, 100);
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
  update(N4G, 48);
  update(lte, 55);
  update(fiveg, 40);
  update(rf, 60);
}

// function updateWidths() {
//   let widths = {
//     fourg: { dom: N4G, value: 0 },
//     gsm: { dom: gsm, value: 0 },
//     lte: { dom: lte, value: 0 },
//     fiveg: { dom: fiveg, value: 0 },
//     rf: { dom: rf, value: 0 },
//   };

//   setInterval(() => {
//     if (widths["fourg"].value < 100) {
//       widths["fourg"].value += 100 / 1;
//       N4G.style.width = widths["fourg"].value + "%";
//     }
//     if (widths["gsm"].value < 100) {
//       widths["gsm"].value += 100 / 2;
//       gsm.style.width = widths["gsm"].value + "%";
//     }
//     if (widths["lte"].value < 100) {
//       widths["lte"].value += 100 / 4;
//       lte.style.width = widths["lte"].value + "%";
//     }
//     if (widths["fiveg"].value < 100) {
//       widths["fiveg"].value += 100 / 6;
//       fiveg.style.width = widths["fiveg"].value + "%";
//     }
//     if (widths["rf"].value < 100) {
//       widths["rf"].value += 100 / 8;
//       rf.style.width = widths["rf"].value + "%";
//     }
//   }, 1000);
// }

pulse.addEventListener("click", () => {
  gsm.style.width = "100%";
  update(N4G, 45);
  update(lte, 55);
  update(fiveg, 35);
  update(rf, 65);
});

two1();
