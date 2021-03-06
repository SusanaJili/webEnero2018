// This example adds a red rectangle to a map.

function initMap() {
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 13,
    center: {lat: 33.678, lng: -116.243},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: {
      north: 33.685, 
      south: 33.671, 
      east: -116.234, 
      //east: -116.217, 
      west: -116.251 
    }
  });
}
