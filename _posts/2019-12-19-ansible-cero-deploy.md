---
layout: actividad

#Datos del Evento
title: "Ansible, de cero a deploy"
subtitle: "Colegio Liceo Erasmus"
description: "Charla taller sobre Ansible"

#Fecha
startDate: 2019-12-19T17:30
endDate: 2019-12-19T20:30

#Lugar
place: "Colegio Liceo Erasmus"
street: "Almeria"
locality: "Almería"
postalCode: "04004"

category: actividades
user: varios
---
Ansible es una herramienta para automatizar tareas repetitivas, y asi asegurar que nuestos sistemas se encuentran en el estado definido
# ¿Qué necesitas?

Deberias de tener acceso a una linea de comandos desde la que instalar ansible con pip, o la paqueteria de tu distribucion favorita

Tambien seria bueno que tuvises alguna maquina virtual con la que "jugar" con los playbooks que vamos a desarrollar

Si tienes una raspi a mano, tambien puede ser interesante como lugar de experimentacion


# ¿A quién va dirigida esta charla?

- a los sysadmins que automatizan tareas con scripts bash, pero quisieran poder leer su propio codigo cuando vuelven a el al cabo de unos meses
- a los usuarios de sistemas que instalan aplicaciones como quien se pasea por un laberinto, y sienten que deberian de ir dejando un rastro de miguitas de pan para poder salir
- a quienes sientan curiosidad por la idea DevOps
- a los desarrolladores que quisieran dar fuerza de ley al argumento universal "en mi maquina funciona"

# ¿De qué hablaremos?
a) cultura y conocimiento compartido
- "...está lleno de estrellas!"
- neo siguiendo al conejo blanco
- heroes de la revolucion digital
- ¿cuántas máquinas puede gestionar un sysadmin?
- el sysadmin automático
- autoservicio de superpoderes
- control de versiones, control de daños

b) "en hombros de gigantes"
- makefiles para todos!
- cfengine, y la abstracción
- segunda generación(puppet y chef): simplificando y abstrayendo
- tercera generación(ansible): pragmatismo 
- ansible como frontend al mundo

c) amasando y fermentando
- inventario
- nodos
- llaves
- ad-hoc commands
- yaml
- playbooks
- facts
- debug msg
- modulos (ansible-doc)

d) afilando el hacha
- inventarios dinamicos
- roles, y su estructura
- variables y lookups
- with_...
- register
- when
- tags
- templates
- jinja2
- handlers
- vaults
- environment en modulos
- hosts: grupos, local, nombres...
- estados de error y decisiones asociadas
- vault, gestion de secretos
- ansible-galaxy, dependencias, 
- fontaneria de ssh 
- trucos para acelerar los playbooks
- testing de infraestructuras: 
  - serverspec
  - test-kitchen
  - goss
- tower, 

e) rotos y descosidos
- debug 
- sysntax-check
- list-hosts
- check mode
- diff
