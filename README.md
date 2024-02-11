<h1 align="center">CTF-2025-SRS 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-2.0.0-ff69b4" />
  <img alt="Vue" src="https://img.shields.io/badge/Vue-3.0.0-ff69b4" />
  <img alt="Node" src="https://img.shields.io/badge/Node-14.17.0-ff69b4" />
</p>

> This repository consists of multiple Ansible playbooks that will allow you to deploy a whole web architecture for the CTF game of the 2025 SRS promotion at EPITA engineering school.

## Deploy

Ansible is used to deploy the architecture and configure the server at disposal. To deploy the architecture, you must first clone the repository and then run the following command:

```sh
sudo apt install ansible
```

Then you can set the IP of the server in the `hosts.ini` file as follows:

```sh
echo "[hosts]\n<IP>" > hosts.ini

```

Finally, you can run the following command to deploy the architecture:

```sh
ansible-playbook -i hosts.ini  main.yml -u root --ask-pass
```

When everything is done, two websites will be accessible at the following addresses:
  
```
http://vitrine.srs2025.com
http://cms.srs2025.com
```
To set up the CMSmadesimple, simply follow the instructions on the website: https://docs.cmsmadesimple.org/


## Author

👤 **Mehdi Fidahoussen / Théo Le Bever / Marius André**