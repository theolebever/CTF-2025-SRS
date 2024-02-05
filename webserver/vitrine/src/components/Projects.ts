// https://michaelkolesidis.com
// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import projectList from "../data/projects.js";
import { populateProjects } from "../utils/populateProjects.js";

export default function projects() {
  const projects = document.getElementById("projects");

  if (projects != null) {
    // Project Title
    const projectsTitle = document.createElement("div");
    projectsTitle.classList.add("wavy");
    projectsTitle.innerHTML = /* html */ `   
        <span style="--i:1">M</span>
        <span style="--i:2">E</span>
        <span style="--i:3">M</span>
        <span style="--i:4">E</span>
        <span style="--i:5">S</span>`;
    projects.appendChild(projectsTitle);

    const projectsContainer = document.createElement("div");
    projectsContainer.setAttribute("id", "projects-container");
    projects.appendChild(projectsContainer);

    const numberOfProjects = projectList.length;

    // Ppopulate projects
    populateProjects(0, numberOfProjects, projectsContainer);

    // Info box
    const more = document.createElement("p");
    more.setAttribute("id", "more");
    more.innerHTML = `The list gets updated regularly with new memes. Check back again soon!`;
    projects.appendChild(more);
  }
}
