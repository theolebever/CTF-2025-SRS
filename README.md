<h1 align="center">CTF-2025-SRS 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-2.0.0-ff69b4" />
  <img alt="Vue" src="https://img.shields.io/badge/Vue-3.0.0-ff69b4" />
  <img alt="Node" src="https://img.shields.io/badge/Node-14.17.0-ff69b4" />
</p>

> This repository consists of a docker-compose file that will allow you to deploy a whole web architecture for the CTF game of the 2025 SRS promotion at EPITA engineering school.

## Deploy

To instantiate the architecture, you must first clone the repository and then run the following command:

```sh
docker compose up
```

It will take a few minutes to download the images and start the containers. Once that's done two websites will be available:
```
http://vitrine.srs2025.com
http://cms.srs2025.com
```
To set up the CMSmadesimple, simply follow the instructions on the website: https://docs.cmsmadesimple.org/


## Author

👤 **Mehdi Fidahoussen / Théo Le Bever / Marius André**