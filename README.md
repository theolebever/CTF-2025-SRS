# ADLIN TP4 

## Contexte
Ce dépôt contient un ensemble de playbooks Ansible pour automatiser la configuration et la mise en place d'un serveur web, sécuriser le serveur et configurer le serveur de noms.

## Playbooks

    - basis.yml : Ce playbook met en place les exigences de base pour le serveur. Il met à jour et met à niveau les paquets, et installe les paquets requis tels que sudo, vim, zsh, git, nftables, nginx, python3, python3-venv, libaugeas0, bind9, bind9-doc et bind9utils.

    - securing.yml : Ce playbook sécurise le serveur en créant un nouvel utilisateur avec des privilèges sudo et en configurant les règles de pare-feu à l'aide de nftables.

    - vitrine.yml : Ce playbook configure le serveur web avec Nginx et obtient un certificat SSL à l'aide de Certbot. Il crée un environnement virtuel Certbot, crée un lien symbolique pour Certbot et active le service Nginx.

    - name-server.yml : Ce playbook configure le serveur de noms à l'aide de Knot DNS. Il crée un fichier de configuration Knot et un fichier de zone pour le domaine.

    - main.yml : Il s'agit du playbook principal qui importe et exécute tous les autres playbooks dans le bon ordre.

## Utilisation

Ces playbooks sont conçus pour être exécutés en remote. Pour ce faire, vous devez d'abord installer Ansible sur votre machine locale. Pour ce faire, exécutez la commande suivante :

```bash
sudo apt-get install ansible
```
Ensuite, il faut installer ce package sur votre machine locale. Pour ce faire, exécutez la commande suivante :

```bash
 sudo apt-get install sshpass
```
Ensuite, il faut configuré le fichier hosts avec l'adresse IP de votre serveur. Pour ce faire, exécutez la commande suivante :

```bash
echo "[hosts]\n<IP>" > hosts.ini
```
Il ne reste plus qu'à cloner ce dépôt et à exécuter le playbook principal avec la commande suivante :

```bash
ansible-playbook -i hosts.ini main.yml -u root --ask-pass --ask-vault-pass
```

Cela exécutera les playbooks dans l'ordre suivant :

    - Mettre en place la base (basis.yml)
    - Sécuriser le serveur (securing.yml)
    - Configurer le serveur web (vitrine.yml)
    - Configurer le serveur de noms (name-server.yml)

Après l'exécution des playbooks, votre serveur sera configuré, sécurisé et équipé d'un serveur web et d'un serveur de noms.