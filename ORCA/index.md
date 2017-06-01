---
layout: default
title: Herramientas de ayuda para los traductores y productores de software libre en español 
---

(Versión 3.01, 1 de junio de 2017)

Adaptación a [gh-pages](https://pages.github.com/) del material original disponible en http://es.tldp.org/ORCA/glosario.html con copyright © Jaime Villate, 2000. Este documento es libre. Puede copiarlo, distribuirlo y/o modificarlo bajo los términos de la Licencia GNU Para Documentación Libre, versión 1.1 o cualquier versión posterior publicada por la Free Software Foundation. 

# Prefacio

El objetivo de este glosario no es explicar el significado de los términos de informática usados en inglés, sino dar una lista de sugerencias para su traducción al español. Este glosario es útil para quien ya tiene suficientes conocimientos de informática en inglés; a quienes busquen un glosario que explique el significado de las palabras técnicas de informática en inglés les recomiendo consultar el Glosario básico inglés-español para usuarios de Internet, de Rafael Fernández Calvo (ver bibliografía o el archivo ``fuentes''). 

Las traducciones que se presentan en este glosario son las que han sido aceptadas por la comunidad que produce documentación libre para programas libres, independientemente de que sean consideradas erróneas por algunos; en los casos en que existe polémica, se da alguna información adicional. Se ha adoptado un punto de vista pragmático según el cual lo mas importante es la comprensión del mensaje y no su forma; por eso no se ha intentado definir cuales son los términos correctos (si es que existen) sino cuales son los que serán comprendidos por la mayor parte de los lectores, evitando extranjerismos cuando sea posible. 
Los verbos son indicados por una v entre paréntesis. Los adjetivos son traducidos en la forma masculina y en los substantivos se indica su género cuando no es obvio. Cuando una palabra tiene varios significados, estos aparecen numerados; y si la traducción al español tiene varios significados, se explica entre paréntesis a cual de ellos se refiere. Hay palabras para las cuales el consenso general es que no deben ser traducidas; en esos casos aparece como traducción la misma palabra en inglés, seguida de una posible traducción para los casos en que sea necesario traducirla. 
La principal fuente para este glosario ha sido la comunidad hispano-parlante que desarrolla y usa software libre, participando directamente en la edición del glosario a través de su interfaz web http://quark.fe.up.pt/orca, o indirectamente a través de sus discusiones en las listas de correo sobre el tema. La lista de colaboradores aparece en un apéndice y en el archivo ``colaboradores''; las listas de correo y publicaciones usadas se indican en la bibliografía y en el archivo ``fuentes''. 

# Glosario

[A](#A) | [B](#B) | [C](#C) | [D](#D) | [E](#E) | [F](#F) | [G](#G) | [H](#H) | [I](#I) | [J](#J) | [K](#K) | [L](#L) | [M](#M) | [Bibliografía](#Bibliografía) |
[N](#N) | [O](#O) | [P](#P) | [Q](#Q) | [R](#R) | [S](#S) | [T](#T) | [U](#U) | [V](#V) | [W](#W) | [X](#X) | [Y](#Y) | [Z](#Z) | [Colaboradores](#Colaboradores) |


{% assign myVar = '-' %}
{% for iteradorTerminos in site.data.ORCA.glosario %}
{% assign inicial = iteradorTerminos.termino | truncate:1,"" | upcase %}
{% if myVar != inicial %}
{% assign myVar = inicial %}
## {{ myVar }} (ir al [índice](#glosario))
{: #{{ myVar }} }
{% endif %}
- **{{ iteradorTerminos.termino }}**:  
{% for traduccion in iteradorTerminos.traduccion %}
{{ traduccion }}
{% endfor %}
{% endfor %}

# Bibliografía
(ir al [índice](#glosario))

{% for iterador in site.data.ORCA.bibliografia %}
1. [{{ iterador.referencia }}]({{ iterador.url }})
{% endfor %}


# Colaboradores
(ir al [índice](#glosario))

{% for iterador in site.data.ORCA.colaboradores %}
{% if iterador.email %}
* [{{ iterador.nombre }}](mailto:{{ iterador.email}}) - {{ iterador.misc }}
{% else %}
* {{ iterador.nombre }} - {{ iterador.misc }}
{% endif %}
{% endfor %}