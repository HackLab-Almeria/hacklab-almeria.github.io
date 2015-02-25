[![Build Status](https://travis-ci.org/HackLab-Almeria/hacklab-almeria.github.io.svg?branch=master)](https://travis-ci.org/HackLab-Almeria/hacklab-almeria.github.io)

# Web del Hacklab Almería

© HackLab Almería y respectivos autores 2015, licencia [Attribution 4.0 International (CC BY 4.0)][5]  [![Attribution 4.0 International (CC BY 4.0)](http://i.creativecommons.org/l/by/4.0/88x31.png "Attribution 4.0 International (CC BY 4.0)")][5]

Este es el repositorio de la nueva web del Hacklab Almería, creada mediante [Jekyll][1], [Markdown][2] y `HTML/CSS`.

### ¿Cómo está construida?

La maquetación principal está hecha con`HTML/CSS`, sin embargo cada página individual está escrita en `markdown` con la idea de simplificar su creación y mantener un estilo uniforme.

Para las tareas de construcción, el encargado será **[Jekyll][1]**.

### ¿Cómo instalar Jekyll?

#### GNU/Linux

En distribuciones basadas en _Debian_ bastará un `apt-get install jekyll`. Como normal general, siempre se puede instalar usando las _gems_ de _Ruby_, `gems install jekyll`.

#### Windows

Para instalar [Jekyll][1] en el sistema de Microsoft puedes seguir [este tutorial][3].

#### Mac OS X

Puede instalarse usando las _gems_ de _ruby_, `gems install jekyll`. Requiere las [Command Line Tools de XCode][4].

### ¿Cómo usar Jekyll?

Bastará con ir a la carpeta raíz de la web y ejecutar `jekyll serve`.

### ¿Cómo crear un nuevo evento?

Para crear un nuevo evento, debes copiar unas de las plantillas del directorio `_drafts` y nombrar el fichero siguiendo el esquema de fecha+nombre, como en el resto. Por ejemplo:

```
2014-03-29-dia-arduino.md
```

Una vez hayas terminado el evento y quieras _publicarlo_, símplemente debes moverlo a la carpeta `_posts`. 

```
├── _posts
│   ├── 2014-03-29-dia-arduino.md
```

### ¿Cómo se modifica el menú del foro?

Sólo podrán hacerlos aquellos con permisos de **Administración**.

Deberán ir a: `Administrar -> Personalizar -> Contenido de Texto -> Encabezado de página`

Si necesitan modificar el CSS:  `Administrar -> Personalizar -> CSS/HTML -> Estilo Hacklab`


[1]: http://jekyllrb.com
[2]: http://es.wikipedia.org/wiki/Markdown
[3]: http://jekyll-windows.juthilo.com
[4]: http://railsapps.github.io/xcode-command-line-tools.html
[5]: http://creativecommons.org/licenses/by/4.0/
