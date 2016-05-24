# Web del Hacklab Almería

[![Build Status](https://travis-ci.org/HackLab-Almeria/hacklab-almeria.github.io.svg?branch=master)](https://travis-ci.org/HackLab-Almeria/hacklab-almeria.github.io) 
[![Join the chat at https://gitter.im/HackLab-Almeria/hacklab-almeria.github.io](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/HackLab-Almeria/hacklab-almeria.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Este es el repositorio de la nueva web del Hacklab Almería, creada mediante [Jekyll][1], [Markdown][2] y `HTML/CSS`.

### ¿Cómo está construida?

La maquetación principal está hecha con`HTML/CSS`, sin embargo cada página individual está escrita en `markdown` con la idea de simplificar su creación y mantener un estilo uniforme.

Para las tareas de construcción, el encargado será **[Jekyll][1]**.

### ¿Cómo instalar Jekyll?

#### GNU/Linux

En distribuciones basadas en _Debian_ bastará un `apt-get install jekyll`. Como norma general siempre se puede instalar usando las _gems_ de _Ruby_, `gem install jekyll`.

#### Windows

Para instalar [Jekyll][1] en el sistema de Microsoft puedes seguir [este tutorial][3].

#### Mac OS X

Puede instalarse usando las _gems_ de _ruby_, `gem install jekyll`. Requiere las [Command Line Tools de XCode][4].

### ¿Cómo usar Jekyll?

Bastará con ir a la carpeta raíz de la web y ejecutar `jekyll serve`.

### ¿Cómo crear un nueva actividad?

Para crear una nueva actividad, debes copiar unas de las plantillas (preferiblemente`ejemplo-jsonlp`) del directorio `_drafts` y nombrar el fichero siguiendo el esquema de fecha+nombre, como en el resto. Por ejemplo:

```
2014-03-29-dia-arduino.md
```

Para poder ver los borradores, deberás ejecutar Jekyll en modo draft con `jekyll serve --drafts`

Una vez hayas terminado la actividad y quieras _publicarla_, símplemente debes moverla a la carpeta `_posts`.

```
├── _posts
│   ├── 2014-03-29-dia-arduino.md
```

Una vez esté en publicada en actividades, el sistema **creará automáticamente una entrada en https://foro.hacklabalmeria.net/c/actividades **

Consulta la sección de automatismos para saber qué otras cosas ocurren automágicamente.

### ¿Cómo se modifica el menú del foro?

Sólo podrán hacerlos aquellos con permisos de **Administración**.

Deberán ir a: `Administrar -> Personalizar -> Contenido de Texto -> Encabezado de página`

Si necesitan modificar el CSS:  `Administrar -> Personalizar -> CSS/HTML -> Estilo Hacklab`

### Automatismos:

Estos automatismos están relacionados directamente con acciones automáticas generadas a partir de cambios en nuestra web:

#### http://zapier.com 

Para añadir al calendario eventos de actividades creadas en _posts.

Referencia: https://foro.hacklabalmeria.net/t/automatizar-la-difusion-en-redes-sociales-de-los-eventos/6527/6

   - «Prepara los eventos sociales» que se encarga de mandar anuncios programados para las rrss (a partir de http://hacklabalmeria.net/social.xml)
   - «Añade los eventos», que añade las actividades al calendario (a partir de http://hacklabalmeria.net/calendar.xml)  
   
#### Hootsuite.com
   
Usamos hootsuite para publicar contenidos de https://foro.hacklabalmeria.net/c/observatorio.rss

### Licencia

© Los respectivos autores, 2015, 2016.  
Licencia [Attribution 4.0 International (CC BY 4.0)][5]  
[![Attribution 4.0 International (CC BY 4.0)](http://i.creativecommons.org/l/by/4.0/88x31.png "Attribution 4.0 International (CC BY 4.0)")][5]


[1]: http://jekyllrb.com
[2]: http://es.wikipedia.org/wiki/Markdown
[3]: http://jekyll-windows.juthilo.com
[4]: http://railsapps.github.io/xcode-command-line-tools.html
[5]: http://creativecommons.org/licenses/by/4.0/
