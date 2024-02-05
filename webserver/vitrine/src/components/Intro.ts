// https://michaelkolesidis.com
// Copyright (c) 2023 SRS 2025 <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { WindowManager, dragElement } from "dom-window-manager";

let windowManager = new WindowManager();

export default function intro() {
  const intro = document.getElementById("intro");

  if (intro != null) {
    // Who Am I (paragraph on the left)
    const whoami = document.createElement("p");
    whoami.setAttribute("id", "left");
    whoami.innerHTML = `Hi, fellow SRS!<br>This website is full of secrets and easter eggs, so feel free to explore and click on anything you see.`;
    intro.appendChild(whoami);

    // Handwriting
    const handwriting = document.createElement("div");
    handwriting.setAttribute("id", "handwriting");
    const handwritingText = document.createElement("p");
    handwritingText.innerHTML = /* html */ `⤺ This is your<br> 
                                              &nbsp;&nbsp;&nbsp;
                                              emblem now`;
    handwriting.appendChild(handwritingText);
    intro.appendChild(handwriting);
    handwritingText.addEventListener("click", () => {
      duckDebuggingModal.style.display = "block";
      duckDebuggingModal.style.pointerEvents = "all";
    });

    // Modal
    const duckDebuggingModal = document.createElement("div");
    duckDebuggingModal.setAttribute("id", "duck-modal");
    duckDebuggingModal.innerHTML = /* html */ `
    You'll see that you'll spend a lot of time in the "lab".<br>
    Make it your home, and make it your own.<br>
    <a 
      target="_blank" 
      href="https://en.wikipedia.org/wiki/Rubber_duck_debugging"
    >
      LEARN MORE
    </a>`;
    handwriting.appendChild(duckDebuggingModal);

    // Modal X Button
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "✕";
    removeButton.addEventListener("click", () => {
      handwritingText.style.pointerEvents = "none";
      handwriting.removeChild(duckDebuggingModal);
    });
    duckDebuggingModal.appendChild(removeButton);

    dragElement(duckDebuggingModal);
    duckDebuggingModal.style.zIndex = windowManager.base;
    duckDebuggingModal.addEventListener("mousedown", () => {
      duckDebuggingModal.style.zIndex = windowManager.moveOnTop();
    });

    // Paragraph on the right
    const whatami = document.createElement("p");
    whatami.setAttribute("id", "right");
    whatami.innerHTML = /* html */ `Now the fate of the SRS major is in your hands.<br> Take good care of it. <br> Don't forget, never create beef with the TCOMs they control the internet in the lab.`;
    intro.appendChild(whatami);
  }
}
