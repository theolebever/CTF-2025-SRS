// https://michaelkolesidis.com
// Copyright (c) 2023 SRS 2025 <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function footer() {
  const footer = document.getElementById("footer");

  if (footer != null) {
    // Copyright
    const copyright = document.createElement("p");
    copyright.setAttribute("id", "copyright");
    copyright.innerHTML = `© SRS 2024`;
    footer.appendChild(copyright);

    const disclaimer = document.createElement("p");
    disclaimer.setAttribute("id", "disclaimer");
    disclaimer.innerHTML = `This website is full of secrets, if you want to know more click here <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" >here</a>.`;
    footer.appendChild(disclaimer);

    const logo = document.createElement("div");
    logo.innerHTML = /* html */ `
      <img id="duck" alt="logo" src="assets/inverted-logo.png" />
    `;
    footer.appendChild(logo);

    const logoImage = document.getElementById("duck");

    if (logoImage !== null) {
      logoImage.addEventListener("click", function (event) {
        event.stopPropagation();
        const squeak = new Audio("../../assets/squeak.mp3");
        squeak.playbackRate = 1.35;
        squeak.play();
      });
    }
  }
}
