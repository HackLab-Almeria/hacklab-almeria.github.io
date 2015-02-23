![Build Status](https://travis-ci.org/HackLab-Almeria/hacklab-almeria.github.io.svg?branch=master)

# Web del Hacklab Almería


Este es el repositorio de la nueva web del Hacklab Almería, creada mediante Jekyll, Markdown y HTML/CSS.

### ¿Cómo está construida?

La maquetación principal corre a cargo del `HTML/CSS`, sin embargo, cada página individual está creada usando `markdown` con la idea de simplificar su creación y mantener un estilo uniforme.

Para las tareas de construcción, el encargado será **Jekyll**

### ¿Cómo instalar Jekyll?

#### GNU/Linux

En distribuciones basadas en _Debian_ bastará un `apt-get install jekyll`. Como normal general, siempre se puede instalar usando las _gems_ de _Ruby_, `gems install jekyll`.

#### Windows

Para instalar Jekyll en el sistema de Microsoft puedes seguir [este tutorial][1]

### ¿Cómo usar Jekyll?

Bastará con ir a la carpeta raíz de la web y ejecutar `jekyll serve`


### ¿Cómo crear un nuevo evento?

Para crear un nuevo evento, debes copiar unas de las plantillas del directorio `_draws` y nombrar el fichero siguiendo el esquema de fecha+nombre, como en el resto.

Una vez hayas terminado el evento y quieras _publicarlo_, símplemente debes moverlo a la carpeta `_posts` 


[1]: http://jekyll-windows.juthilo.com
