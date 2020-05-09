---
layout: post-jsonld
#Datos del Evento
title: "Anarres: Desplegando servicios con Ansible"
description: "Charla taller en el que explicaremos como levantar servicios con Docker utilizando Ansible"
thumbnail: "/recursos/pythonalmeria.png"
#Fecha
startDate: 2020-05-13T20:15
endDate: 2020-05-13T21:15
#Lugar
place: "Jitsi"
street: "Online"
locality: "Almería"
postalCode: "04006"
map: https://meet.jit.si/hacklabalm_anarres
category: actividades
#Redes sociales. Máximo 90 carácteres para el texto
social:
  - time: 2020-05-10T21:00
    text: "Este miércoles explicaremos cómo levantar servicios con Docker usando Ansible ^^"
  - time: 2020-05-12T11:00
    text: "Crea tu propia nube en minutos con Ansible y Docker, este mañana lo explicaremos en directo"
  - time: 2020-05-13T11:00
    text: "Recordad hoy, como crear tu propia nube con Docker y Ansible"
---

# #YoMeQuedoEnCasa

<p align="center">
  <img
    src="https://whiteclub.radio.clubs.etsit.upm.es/images/logo.svg"
    alt="Anarres" width="250px"/>
</p>

### DESCRIPCIÓN

Anteriormente explicamos cómo funciona Ansible, en este taller juntaremos esta potencia sumada al poder de Docker para levantar servicios en minutos. En esta sesión explicaremos el proyecto [Anarres](https://github.com/anarres-org/anarres), un *playbook* de Ansible para desplegar un servidor GNU/Linux con todos los servicios que necesitemos.

En este taller explicaremos:
* Introducción a [Docker](https://www.docker.com/)
* Levantar servicios con [Docker](https://www.docker.com/)
* Automatizar el despliege de servicios con [Docker](https://www.docker.com/) y [Ansible](https://www.ansible.com/)
* [Anarres](https://github.com/anarres-org/anarres)

Con el proyecto [Anarres](https://github.com/anarres-org/anarres) podremos desplegar fácilmente estos servicios:
* [Docker Registry](https://docs.docker.com/registry/): A stateless, highly
   scalable server side application that stores and lets you distribute Docker
   images. Using [library/registry](https://hub.docker.com/_/registry).
* [CoreOS Clair](https://github.com/coreos/clair): Vulnerability Static Analysis
   for Containers. Using
   [quay.io/coreos/clair](https://quay.io/repository/coreos/clair).
* [Jessfraz Docker registry web interface](https://github.com/genuinetools/reg):
   Docker registry v2 command line client and repo listing generator with
   security checks. Using
   [jessfraz/reg](https://hub.docker.com/r/jessfraz/reg).
* [OpenLDAP](http://www.openldap.org/): Using
   [osixia/openldap](https://github.com/osixia/docker-openldap).
* [phpLDAPadmin](http://phpldapadmin.sourceforge.net/):
   Using
   [osixia/phpldapadmin](https://github.com/osixia/docker-phpLDAPadmin).
* [Prosody IM](https://prosody.im/): A modern XMPP communication server. Using
  [unclev/prosody-docker-extended](https://github.com/unclev/prosody-docker-extended).
* [Gitea](https://docs.gitea.io/): Using
  [gitea/gitea](https://github.com/go-gitea/gitea).
* [Drone](https://drone.io/): Using
  [drone/drone](https://github.com/drone/drone). For the self hosted gitea and
  for GitHub.
* [CodiMD](https://github.com/hackmdio/codimd): [HackMD](https://hackmd.io/)
  like realtime collaborative markdown notes service. Using
  [docker-hackmd](https://github.com/hackmdio/docker-hackmd).
* [Transmission](https://transmissionbt.com/): Using
  [linuxserver/transmission](https://github.com/linuxserver/docker-transmission)
  or [docker-transmission-openvpn](https://github.com/haugene/docker-transmission-openvpn).
* [Wallabag](https://wallabag.org/): Using
  [wallabag/wallabag](https://github.com/wallabag/docker).
* [Syncthing](https://syncthing.net/): Using
  [syncthing/syncthing](https://github.com/syncthing/syncthing).
* [OpenVPN](https://openvpn.net/): Using
  [kylemanna/openvpn](https://github.com/kylemanna/docker-openvpn).
* [Radicale](https://radicale.org/): Using
  [tomsquest/docker-radicale](https://github.com/tomsquest/docker-radicale).
* [Taskwarrior Server](https://taskwarrior.org/): Using
  [andir/docker-taskd](https://github.com/andir/docker-taskd).
* [Nextcloud](https://nextcloud.com/): Using
  [nextcloud](https://github.com/nextcloud/docker).
* [Taiga](https://taiga.io/): Project management platform for agile developers
   & designers and project managers. Using
  [docker-taiga](https://github.com/m0wer/docker-taiga).
* [NFS Server](https://sourceforge.net/projects/nfs/): Using
  [erichough/nfs-server](https://github.com/ehough/docker-nfs-server).
* [BIND9](https://www.isc.org/bind/) Versatile, classic, complete name server
   software. Using [sameersbn/bind](https://github.com/sameersbn/docker-bind).
* [Murmur](https://wiki.mumble.info/wiki/Main_Page): Open source, low-latency,
   high quality voice chat software. Using
   [m0wer/murmur](https://hub.docker.com/r/m0wer/murmur).
* [InfluxDB](https://www.influxdata.com/): Scalable datastore for metrics,
   events, and real-time analytics. Using
   [influxdb](https://hub.docker.com/_/influxdb).
* [Grafana](https://grafana.com/): The open platform for beautiful
   analytics and monitoring. Using
   [grafana/grafana](https://hub.docker.com/r/grafana/grafana).
* [Home Assistant](https://www.home-assistant.io/) Open source home automation
   that puts local control and privacy first. Using
   [homeassistant/home-assistant](https://hub.docker.com/r/homeassistant/home-assistant)
* [RStudio](https://www.rstudio.com/) provides popular open source and
   enterprise-ready professional software for the R statistical computing
   environment. Using
   [rocker/rstudio](https://hub.docker.com/r/rocker/rstudio).
* [Jellyfin](https://jellyfin.media/) The Free Software Media System. Using
  [jellyfin/jellyfin](https://github.com/jellyfin/jellyfin).
* [Portainer](https://www.portainer.io/) Making Docker management easy. Using
  [portainer/portainer](https://hub.docker.com/r/portainer/portainer).
* [Anki sync server](https://github.com/tsudoko/anki-sync-server) This is a
   personal Anki server, which you can sync against instead of AnkiWeb. Using
   [kuklinistvan/anki-sync-server](https://hub.docker.com/r/kuklinistvan/anki-sync-server/tags).
* [Moodle](https://moodle.org/) Open-source learning plataform. Using
  [moodlehq/moodle-php-apache](https://hub.docker.com/r/moodlehq/moodle-php-apache).
* [JupyterHub](https://jupyter.org/hub) A multi-user version of the notebook
   designed for companies, classrooms and research labs. Using
   [m0wer/jupyterhub](https://hub.docker.com/r/m0wer/jupyterhub).
* [Jackett](https://github.com/Jackett/Jackett) API Support for your favorite
   torrent trackers. Using
   [linuxserver/jackett](https://hub.docker.com/r/linuxserver/jackett).
* [Sonarr](https://github.com/Sonarr/Sonarr) API Support for your favorite
   torrent trackers. Using
   [linuxserver/sonarr](https://hub.docker.com/r/linuxserver/sonarr).
* [Radarr](https://github.com/Radarr/Radarr) A fork of Sonarr to work with movies
   à la Couchpotato. Using
   [linuxserver/radarr](https://hub.docker.com/r/linuxserver/radarr).
* [Lidarr](https://github.com/lidarr/Lidarr) Looks and smells like Sonarr but
   made for music. Using
   [linuxserver/lidarr](https://hub.docker.com/r/linuxserver/lidarr).
* [Bazarr](https://github.com/morpheus65535/bazarr) is a companion application
   to Sonarr and Radarr. It manages and downloads subtitles based on your
   requirements. Using
   [linuxserver/bazarr](https://hub.docker.com/r/linuxserver/bazarr).
* [Ombi](https://github.com/tidusjar/Ombi) Want a Movie or TV Show on Plex or
   Emby? Use Ombi! Using
   [linuxserver/ombi](https://github.com/linuxserver/docker-ombi).

---

### DONDE Y CUANDO

El Miércoles 13 de Mayo a las 20:10 (justo después de los aplausos), a través de uno de los mejores servicios de videollamada OpenSource que existe, Jitsi.

No es necesaria instalación ninguna ni inscripción previa; solo abre el navegador que más te guste y abre el siguiente enlace:

[https://meet.jit.si/hacklabalm_anarres](https://meet.jit.si/hacklabalm_anarres)

**NOTA:** Para evitar problemas con la charla, se habilitará la retransmisión en directo a través de youtube.

---

### QUIEN HABLA

Los charlistas serán [Fran Acién](https://github.com/acien101) y [m0wer](https://github.com/m0wer), estudiantes de teleco en la ETSIT UPM de Madrid.

---
