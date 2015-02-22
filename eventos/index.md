---
layout: default
title: Eventos
---

## Eventos


### Próximos eventos

{% assign curDate = site.time | date: '%s' %}

<ul>
{% for post in site.posts %}
    {% assign date = post.date | date: '%s' %}
    {% if date >= curDate %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>

### Eventos pasados

<ul>
{% for post in site.posts %}
    {% assign date = post.date | date: '%s' %}
    {% if date < curDate %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>