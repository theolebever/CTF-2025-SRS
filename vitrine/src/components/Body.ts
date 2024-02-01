// https://michaelkolesidis.com
// Copyright (c) 2023 SRS 2025 <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export default function body() {
  // The structure of the HTML body
  document.body.innerHTML = /*html*/ `   
      <div class="ticker-wrap"><div class="ticker"></div></div>
      <header id="header"></header>
      <main id="main">
          <div id="sketch-placeholder"></div>
          <div id="p5_loading" class="loadingclass">
            <div><div>LOADING</div></div>
          </div>
          <div id="intro"></div>
          <div id="main-content">
            <section id="projects"></section>
          </div>
      </main>
      <footer id="footer"></footer>
      <div id="top-button"></div>
      <div id="overlay"></div>
`;
}
