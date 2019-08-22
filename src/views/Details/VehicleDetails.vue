<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <md-card class="md-card-profile">
            <div class="col-xs-12 mar-no text-center">
            <img class="img mar-btm" style="max-width:110px;" src="../../assets/img/default.png">
            </div>
            <p class="text-lg text-semibold mar-no text-main"></p>
            <p class="text-muted"></p>
            <md-card-content>
              <div class="col-xs-12">
                <p class="text-semibold text-center text-md-center">Vehicle Details :</p>
              <div class="panel-body text-sm pad-no mar-no">
                <table class="table bord-no">
                  <tbody>
                  <tr>
                    <th style="width: 35%">Driver Name </th>
                    <th style="width: 1%">: </th>
                    <td><p style="margin-left: -10px; margin-bottom: -10px"></p></td>
                  </tr>
                  <tr>
                    <th style="width: 35%">Imei Number </th>
                    <th style="width: 1%">: </th>
                    <td><p style="margin-left: -10px; margin-bottom: -10px"></p></td>
                  </tr>
                  <tr>
                    <th style="width: 35%">Machine Number </th>
                    <th style="width: 1%">: </th>
                    <td><p style="margin-left: -10px; margin-bottom: -10px"></p></td>
                  </tr>
                  <tr>
                    <th style="width: 35%">Year of Production </th>
                    <th style="width: 1%">:</th>
                    <td><p style="margin-left: -10px; margin-bottom: -10px"></p></td>
                  </tr>
                  <tr>
                    <th style="width: 35%">Color </th>
                    <th style="width: 1%">:</th>
                    <td><p style="margin-left: -10px; margin-bottom: -10px"></p></td>
                  </tr>
                  <tr>
                    <th style="width: 35%">Expired Date </th>
                    <th style="width: 1%">:</th>
                    <td><p style="margin-left: -10px; margin-bottom: -10px"></p></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div class="col-xs-12">
                <p class="text-semibold text-center">Last Location :</p>
                <div id="map" style="height: 264px ;"></div>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
    <div class="col-sm-8">

      <div class="card">

        <div class="card-body">
          <h3 class="panel-title" align="left">Engine Analysis</h3>
          <div>
            <b-card no-body>
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Battery" active>
                  <div class="col-md-8 mar-no pad-no">
                    <b-select class="col-sm-2" style="position: absolute; margin-left: 130%; margin-top: 1%;z-index: 1;" id="changeYear">
                      <option value="1">Januari</option>
                      <option value="2">Februari</option>
                      <option value="3">Maret</option>
                      <option value="4">April</option>
                      <option value="5">Mei</option>
                      <option value="6">Juni</option>
                      <option value="7">Juli</option>
                      <option value="8">Agustus</option>
                      <option value="9">September</option>
                      <option value="10">Oktober</option>
                      <option value="11">November</option>
                      <option value="12">Desember</option>
                    </b-select>
                    <div class="col-md-4">
                      <div style="text-align: center;">
                        <p class="text-3x mar-no" style="color: #000; font-size:55px" id="weekbattery">0</p>
                        <p>Week Remaining to Maintenance</p>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="Filter">
                  <div class="col-md-8 mar-no pad-no">
                    <b-select class="col-sm-2" style="position: absolute; margin-left: 130%; margin-top: 1%;z-index: 1;" id="changeYear">
                      <option value="1">Januari</option>
                      <option value="2">Februari</option>
                      <option value="3">Maret</option>
                      <option value="4">April</option>
                      <option value="5">Mei</option>
                      <option value="6">Juni</option>
                      <option value="7">Juli</option>
                      <option value="8">Agustus</option>
                      <option value="9">September</option>
                      <option value="10">Oktober</option>
                      <option value="11">November</option>
                      <option value="12">Desember</option>
                    </b-select>
                  <b-card header="Bar Chart">
                    <div class="chart-wrapper">
                      <bar-example chartId="chart-bar-01" style="
                                                            margin: 0 auto;
                                                            z-index: 1;
                                                            max-width: 500px !important;
                                                        "/>

                    </div>
                  </b-card>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="panel-title" align="left">OBD Data</h3>
          <div>
            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Gauges Visual" active>
                <div class="row pad-top">
                  <div class="col-md-3 text-center mar-no pad-no">
                    <p>Vehicle Speed</p>
                  </div>
                  <div class="col-md-3 text-center mar-no pad-no">
                    <p>Engine RPM</p>
                  </div>
                  <div class="col-md-3 text-center mar-no pad-no">
                    <br/><br/>
                    <p class="text-3x mar-no" id="coolant">0°C</p>
                    <p>Coolant Temperature</p>
                  </div>
                  <div class="col-md-3 text-center mar-no pad-no">
                    <br/><br/>
                    <p class="text-3x mar-no" id="engine">0%</p>
                    <p>Engine Load</p>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Speed VS Engine Load">
                <p>
                  I'm the second tab
                </p>
              </b-tab>
              <b-tab title="Throttle vs Flow Rate">
                <p>
                  I'm the second tab
                </p>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="panel-title" align="left">Mileage Report</h3>
          <div>
            <b-card no-body class="tabbable tabs-left">
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Chart" active>
                  <b-card-text>

                  </b-card-text>
                </b-tab>
                <b-tab title="Table">
                  <b-card-text>Tab Contents 2</b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="panel-title" align="left">Trip History (Day)</h3>
          <div>
            <b-card no-body class="tabbable tabs-left">
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import BarExample from '../charts/BarExample'
    import GoogleMapsLoader from "google-maps";
    export default {
        name: 'charts',
        components: {
            BarExample
        },
        data() {
            return {
                counter: 45,
                max: 100,
                max2: 50,
                value: 33.333333333,
                value3: 75,
                bars: [
                    {variant: 'success', value: 75},
                    {variant: 'info', value: 75},
                    {variant: 'warning', value: 75},
                    {variant: 'danger', value: 75},
                    {variant: 'primary', value: 75},
                    {variant: 'secondary', value: 75},
                    {variant: 'dark', value: 75}
                ],
                timer: null,
                striped: true,
                animate: true,
                max3: 100,
                values: [15, 30, 20]
            }
        },
        methods: {
            setClock() {
                this.timer = setInterval(() => {
                    this.bars.forEach(bar => {
                        bar.value = 25 + (Math.random() * 75)
                    })
                }, 2000)
            },
            initMap(google) {
                var myLatlng = new google.maps.LatLng(-6.121435, 106.774124);
                var mapOptions = {
                    zoom: 13,
                    center: myLatlng,
                    scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
                    styles: [
                        {
                            featureType: "water",
                            stylers: [
                                {saturation: 43},
                                {lightness: -11},
                                {hue: "#0088ff"}
                            ]
                        },
                        {
                            featureType: "road",
                            elementType: "geometry.fill",
                            stylers: [
                                {hue: "#ff0000"},
                                {saturation: -100},
                                {lightness: 99}
                            ]
                        },
                        {
                            featureType: "road",
                            elementType: "geometry.stroke",
                            stylers: [{color: "#808080"}, {lightness: 54}]
                        },
                        {
                            featureType: "landscape.man_made",
                            elementType: "geometry.fill",
                            stylers: [{color: "#ece2d9"}]
                        },
                        {
                            featureType: "poi.park",
                            elementType: "geometry.fill",
                            stylers: [{color: "#ccdca1"}]
                        },
                        {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{color: "#767676"}]
                        },
                        {
                            featureType: "road",
                            elementType: "labels.text.stroke",
                            stylers: [{color: "#ffffff"}]
                        },
                        {featureType: "poi", stylers: [{visibility: "off"}]},
                        {
                            featureType: "landscape.natural",
                            elementType: "geometry.fill",
                            stylers: [{visibility: "on"}, {color: "#b8cb93"}]
                        },
                        {featureType: "poi.park", stylers: [{visibility: "on"}]},
                        {
                            featureType: "poi.sports_complex",
                            stylers: [{visibility: "on"}]
                        },
                        {featureType: "poi.medical", stylers: [{visibility: "on"}]},
                        {
                            featureType: "poi.business",
                            stylers: [{visibility: "simplified"}]
                        }
                    ]
                };
                var map = new google.maps.Map(document.getElementById("map"), mapOptions);

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    title: "Hello World!"
                });

                // To add the marker to the map, call setMap();
                marker.setMap(map);
            }
        },
        mounted() {
            GoogleMapsLoader.KEY = "AIzaSyBVcGk9LkQfd-gjF5rdA6q_A_RVkZu8ABA";
            GoogleMapsLoader.load(google => {
                    this.initMap(google);
                }
            );
        }
    }
</script>
<style>

</style>
