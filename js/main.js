function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 40.720047,
			lng: -73.993538
		},
		zoom: 15,
		disableDefaultUI: true,
		styles: [{
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}]
			},
			{
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#616161"
				}]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [{
					"color": "#f5f5f5"
				}]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#bdbdbd"
				}]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#eeeeee"
				}]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#757575"
				}]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e5e5e5"
				}]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#9e9e9e"
				}]
			},
			{
				"featureType": "road",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#757575"
				}]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dadada"
				}]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#616161"
				}]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#9e9e9e"
				}]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e5e5e5"
				}]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [{
					"color": "#eeeeee"
				}]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#c9c9c9"
				}]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#9e9e9e"
				}]
			}
		]


	});
	const marker = new google.maps.Marker({
		position: {
			lat: 40.720047,
			lng: -73.993538
		},
		map: map,
		icon: 'img/pin.svg'
	});
}

;
(function ($) {
	"use strict";
	const sliderTop = $('.ba-slider-top');
	sliderTop.slick({
		arrows: false,
		dots: true
	});

	const sliderBottom = $('.ba-slider__bottom');
	sliderBottom.slick({
		// slide: '.ba-news__cards',

	});
})(jQuery);