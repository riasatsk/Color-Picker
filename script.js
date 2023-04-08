let pallet1 = document.getElementById("pallet1");
let pallet2 = document.getElementById("pallet2");
let pallet3 = document.getElementById("pallet3");
let pallet4 = document.getElementById("pallet4");
let pallet5 = document.getElementById("pallet5");

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexCode = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return hexCode;
}

//this object has diffrent function to get H,S,L value

let Color_Picker = {
  getH() {
    return Math.ceil(Math.random() * 360);
  },
  getS() {
    return Math.ceil(Math.random() * 100);
  },
  getL() {
    return Math.ceil(Math.random() * 100);
  },
};

// this function will generate a color for Pallte
function getColor(pallet) {
  let h = Color_Picker.getH();
  let s = Color_Picker.getS();
  let l = Color_Picker.getL();
  pallet.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;
  let hex = hslToHex(h, s, l);
  pallet.firstElementChild.innerHTML = `${hex.toUpperCase()}`;
  restorecopystate(pallet);
}

function changeColor() {
  getColor(pallet1);
  getColor(pallet2);
  getColor(pallet3);
  getColor(pallet4);
  getColor(pallet5);
}
document.body.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
changeColor();
playAudioSpace()
    }
  });
  changeColor();

  function restorecopystate(pallet){
    pallet.firstElementChild.setAttribute("title","Click to copy");
  
  }
  function copyText(pallet) {
    var text = pallet.firstElementChild.innerText;
    var input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    pallet.firstElementChild.setAttribute("title","Copied")
      playAudio();

  }
  
 // Check if the user is on a mobile device
if (window.matchMedia("(max-width: 768px)").matches) {
  let alert = document.getElementById("alert");
  // Select the element you want to change

  // Change the inner text of the element
  alert.innerText = "Refresh the page to generate new color";
}
  
// this function play the click sound
function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.setAttribute("src","audio.wav")
  audio.play();
}
function playAudioSpace() {
  var audio = document.getElementById("myAudio");
  audio.setAttribute("src","space.wav")
  audio.play();
}

