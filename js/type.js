const bannerDescription = document.getElementById("banner-description");
console.log("🚀 ~ file: srcipt.js:9 ~ bannerDescription:", bannerDescription);
const text = bannerDescription.innerHTML;
bannerDescription.innerHTML = "";

let i = 0;

function type() {
  if (i < text.length) {
    bannerDescription.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

type();
