// https://michaelkolesidis.com
// Copyright (c) 2023 SRS 2025 <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function ticker() {
  const tickerElemenets = document.getElementsByClassName("ticker");
  const ticker = tickerElemenets[0];

  // Message 1
  const message1 = document.createElement("div");
  message1.classList.add("ticker__item");
  message1.innerHTML = `WELCOME TO THE CTF FOR SRS 2025`;
  ticker.appendChild(message1);

  // Message 2
  const message2 = document.createElement("div");
  message2.classList.add("ticker__item");
  message2.innerHTML = `FEEL FREE TO EXPLORE THE WEBSITE`;
  ticker.appendChild(message2);

  // Message 3
  const message3 = document.createElement("div");
  message3.classList.add("ticker__item");
  message3.innerHTML = `CLICK ON ANYTHING YOU SEE`;
  ticker.appendChild(message3);

  // Message 4
  const message4 = document.createElement("div");
  message4.classList.add("ticker__item");
  message4.innerHTML = `TRY MOVING THINGS AROUND...CTF2025{WELCOME_TO_SRS}`;
  ticker.appendChild(message4);

  // Populate
  for (let i = 0; i < 10; i++) {
    ticker.appendChild(message1.cloneNode(true));
    ticker.appendChild(message2.cloneNode(true));
    ticker.appendChild(message3.cloneNode(true));
    ticker.appendChild(message4.cloneNode(true));
  }
}
