<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">Map Panel</h4>
    </div>
    <div>
      <div style="width: 100%; height: 425px" id="map"></div>
    </div>
  </b-card>
</template>

<script>
    import GoogleMapsLoader from 'google-maps';
    export default {
        methods: {
            initMap(google) {
                const myLatlng = new google.maps.LatLng(-6.121435, 106.774124);
                const mapOptions = {
                    zoom: 13,
                    center: myLatlng,
                    scrollwheel: false,
                    styles: [
                        {
                            featureType: 'water',
                            stylers: [
                                { saturation: 43 },
                                { lightness: -11 },
                                { hue: '#0088ff' },
                            ],
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry.fill',
                            stylers: [
                                { hue: '#ff0000' },
                                { saturation: -100 },
                                { lightness: 99 },
                            ],
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: '#808080' }, { lightness: 54 }],
                        },
                        {
                            featureType: 'landscape.man_made',
                            elementType: 'geometry.fill',
                            stylers: [{ color: '#ece2d9',
                            }],
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry.fill',
                            stylers: [{ color: '#ccdca1',
                            }],
                        },
                        {
                            featureType: 'road',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: '#767676',
                            }],
                        },
                        {
                            featureType: 'road',
                            elementType: 'labels.text.stroke',
                            stylers: [{ color: '#ffffff',
                            }],
                        },
                        { featureType: 'poi', stylers: [{ visibility: 'off',
                            }] },
                        {
                            featureType: 'landscape.natural',
                            elementType: 'geometry.fill',
                            stylers: [{ visibility: 'on' }, { color: '#b8cb93',
                            }],
                        },
                        { featureType: 'poi.park', stylers: [{ visibility: 'on',
                            }],
                        },
                        {
                            featureType: 'poi.sports_complex',
                            stylers: [{ visibility: 'on',
                            }],
                        },
                        { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
                        {
                            featureType: 'poi.business',
                            stylers: [{ visibility: 'simplified',
                            }],
                        },
                    ],
                };
                const map = new google.maps.Map(document.getElementById('map'), mapOptions);
                const marker = new google.maps.Marker({
                    position: myLatlng,
                    title: 'Hello World!',
                });

                // To add the marker to the map, call setMap();
                marker.setMap(map);
            },
        },
        mounted() {
            GoogleMapsLoader.KEY = 'AIzaSyBVcGk9LkQfd-gjF5rdA6q_A_RVkZu8ABA'
            ;
            GoogleMapsLoader.load(google => {
                this.initMap(google);
            });
        },
    };
</script>
