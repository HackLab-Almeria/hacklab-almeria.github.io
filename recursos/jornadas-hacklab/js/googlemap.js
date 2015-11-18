function init(lon,lat,zoom_mapa,texto_bocadillo) {
  var map = new google.maps.Map(document.getElementById("map"), {
	scaleControl: true});
  map.setCenter(new google.maps.LatLng(lon,lat));
  map.setZoom(zoom_mapa);
  map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

  var marker = new google.maps.Marker({map: map, position:
	map.getCenter()});
  var infowindow = new google.maps.InfoWindow();
  var comollegar = '<span style="font-size: 12px; color:#666;"><br /><br /><strong>Como llegar:</strong><br /> <a class="enlace_maps" target="_blank" href="http://maps.google.es/maps?saddr='+ lon +','+ lat +'&hl=es&sll='+ lon +','+ lat +'&sspn=14.028067,19.753418&t=h&mra=ls">Desde aqu&iacute;</a> - <a class="enlace_maps" target="_blank" href="http://maps.google.es/maps?daddr='+ lon +','+ lat +'&hl=es&sll='+ lon +','+ lat +'&sspn=14.028067,19.753418&t=h&mra=ls">Hasta aqu&iacute;</a><span>';
  infowindow.setContent(texto_bocadillo + comollegar);
  google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map, marker);
  });
}