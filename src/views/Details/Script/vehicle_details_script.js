<?php defined('BASEPATH') OR exit('No direct script access allowed');?>

<div class="modal" id="excelValidationModal">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header panel-colorful panel-info">
                <h4 class="modal-title text-center" style="color: white" id="messages"></h4>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="simulation">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
                <h4 class="modal-title">Trip Simulation</h4>
            </div>
            <div class="modal-body">
                <div class="row" style="height: 350px">
                    <div class="col-sm-4 pad-no mar-no">
                        <!--                        <div class="col-lg-12">-->
                        <!--                            <div class="panel media middle">-->
                        <!--                                <div class="media-left bg-pink pad-all text-center">-->
                        <!--                                    <i class="fa fa-tachometer icon-3x" style="height: 42px; width: 42px;"></i>-->
                        <!--                                </div>-->
                        <!--                                <div class="media-body pad-all">-->
                        <!--                                    <p class="text-lg mar-no text-semibold" id="avg-speed"></p>-->
                        <!--                                    <p class="text-lg mar-no text-semibold"></p>-->
                        <!--                                    <p class="text-muted mar-no">Avg. Speed</p>-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <div class="col-lg-12">
                            <div class="panel media middle">
                                <div class="media-left bg-warning pad-all text-center">
                                    <i class="fa fa-road icon-3x" style="height: 42px; width: 42px;"></i>
                                </div>
                                <div class="media-body pad-all">
                                    <p class="text-lg mar-no text-semibold" id="distance-total">162.27</p>
                                    <p class="text-lg mar-no text-semibold"></p>
                                    <p class="text-muted mar-no">Total Distance</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel media middle">
                                <div class="media-left bg-purple pad-all text-center">
                                    <i class="fa fa-rocket icon-3x" style="height: 42px; width: 42px;"></i>
                                </div>
                                <div class="media-body pad-all">
                                    <p class="text-lg mar-no text-semibold" id="max-speed"></p>
                                    <p class="text-lg mar-no text-semibold"></p>
                                    <p class="text-muted mar-no">Max Speed</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel media middle">
                                <div class="media-left bg-mint pad-all text-center">
                                    <i class="ti-timer icon-3x" style="height: 42px; width: 42px;"></i>
                                </div>
                                <div class="media-body pad-all">
                                    <p class="text-lg mar-no text-semibold" id="hour-total"></p>
                                    <p class="text-lg mar-no text-semibold"></p>
                                    <p class="text-muted mar-no">Hour Riding</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="panel media middle">
                                <div class="media-left bg-success pad-all text-center">
                                    <i class="fa fa-leaf icon-3x" style="height: 42px; width: 42px;"></i>
                                </div>
                                <div class="media-body pad-all">
                                    <p class="text-lg mar-no text-semibold" id="eco-drive"></p>
                                    <p class="text-lg mar-no text-semibold"></p>
                                    <p class="text-muted mar-no">Eco Drive</p>
                                </div>
                            </div>
                        </div>
                        <!--<div class="col-lg-12">
                            <div class="panel media middle">
                                <div class="media-left bg-dark pad-all text-center">
                                    <i class="fa fa-stop-circle icon-3x" style="height: 42px; width: 42px;"></i>
                                </div>
                                <div class="media-body pad-all">
                                    <p class="text-lg mar-no text-semibold" id="idle-time"></p>
                                    <p class="text-lg mar-no text-semibold"></p>
                                    <p class="text-muted mar-no">Idle Times</p>
                                </div>
                            </div>
                        </div>-->
                        <!--<div class="col-lg-12" style="margin-bottom: 20px">
                            <button class="btn btn-info" id="run-simulation"><i class="fa fa-play-circle"></i> Run Simulation</button>
                        </div>-->
                    </div>
                    <div class="col-sm-8" style="height: 100%">
                        <div class="col-sm-12 pad-no" id="sim-map" style="height: 100%"></div>
<!--                        <div class="col-sm-12 pad-no" style="margin-top: 10px">-->
<!--                            <div class="col-sm-3">-->
<!--                                <div class="panel media middle">-->
<!--                                    <div class="media-left bg-danger text-center" style="padding: 3px 7px 3px 5px;">-->
<!--                                        <i class="fa fa-angle-double-down icon-2x" style="height: 20px; width: 20px;"></i>-->
<!--                                    </div>-->
<!--                                    <div class="media-body pad-lft">-->
<!--                                        <p class="text-sm mar-no text-semibold" id="hour-heavy"></p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-sm-3">-->
<!--                                <div class="panel media middle">-->
<!--                                    <div class="media-left bg-warning text-center" style="padding: 3px 7px 3px 5px;">-->
<!--                                        <i class="fa fa-angle-right icon-2x" style="height: 20px; width: 20px;"></i>-->
<!--                                    </div>-->
<!--                                    <div class="media-body pad-lft">-->
<!--                                        <p class="text-sm mar-no text-semibold" id="hour-medium"></p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-sm-3">-->
<!--                                <div class="panel media middle">-->
<!--                                    <div class="media-left bg-success text-center" style="padding: 3px 7px 3px 5px;">-->
<!--                                        <i class="fa fa-angle-double-right icon-2x" style="height: 20px; width: 20px;"></i>-->
<!--                                    </div>-->
<!--                                    <div class="media-body pad-lft">-->
<!--                                        <p class="text-sm mar-no text-semibold" id="hour-low"></p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-sm-3">-->
<!--                                <div class="panel media middle">-->
<!--                                    <div class="media-left bg-dark text-center" style="padding: 3px 7px 3px 5px;">-->
<!--                                        <i class="fa fa-stop-circle-o icon-2x" style="height: 20px; width: 20px;"></i>-->
<!--                                    </div>-->
<!--                                    <div class="media-body pad-lft">-->
<!--                                        <p class="text-sm mar-no text-semibold" id="hour-idle"></p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-danger" data-dismiss="modal" type="button">Close</button>
            </div>
        </div>
    </div>
</div>

<script>
   
</script>


<!--Bootstrap Datepicker [ OPTIONAL ]-->
<script src="<?php echo site_url('assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js');?>"></script>
<!--Gmaps Plugins-->
<script src="http://maps.google.com/maps/api/js?key=<?php echo $this->config->item('gmaps_api_key');?>&libraries=places,drawing"></script>
<script src="<?php echo site_url('assets/plugins/gmaps/gmaps.js');?>"></script>

<!--FooTable [ OPTIONAL ]-->
<script src="<?php echo site_url('assets/plugins/fooTable/dist/footable.all.min.js');?>"></script>

<!--Gauge js [ OPTIONAL ]-->
<script src="<?php echo site_url('assets/plugins/gauge-js/gauge.min.js');?>"></script>
<!--Speedo-->
<script src="<?php echo site_url('assets/plugins/canvas-gauges/gauge.min.js');?>"></script>
<script src="<?php echo site_url('assets/plugins/highcharts/code/js/modules/solid-gauge.js') ?>"></script>

<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="<?php echo site_url('assets/plugins/datatables/exporter/dataTables.buttons.min.js');?>"></script>
<script src="<?php echo site_url('assets/plugins/datatables/exporter/jszip.min.js');?>"></script>
<script src="<?php echo site_url('assets/plugins/datatables/exporter/pdfmake.min.js');?>"></script>
<script src="<?php echo site_url('assets/plugins/datatables/exporter/vfs_fonts.js');?>"></script>
<script src="<?php echo site_url('assets/plugins/datatables/exporter/buttons.html5.min.js');?>"></script>

<script>

    /*var opts = {
        lines: 10, // The number of lines to draw
        angle: 0, // The length of each line
        lineWidth: 0.3, // The line thickness
        pointer: {
            length: 0.45, // The radius of the inner circle
            strokeWidth: 0.035, // The rotation offset
            color: '#242d3c' // Fill color
        },
        limitMax: 'true', // If true, the pointer will not go past the end of the gauge
        colorStart: '#177bbb', // Colors
        colorStop: '#177bbb', // just experiment with them
        strokeColor: '#ddd', // to see which ones work best for you
        generateGradient: true
    };


    var speed_target = document.getElementById('speed-avg'); // your canvas element
    var speed_gauge = new Gauge(speed_target).setOptions(opts); // create sexy gauge!
    speed_gauge.maxValue = 100; // set max gauge value
    speed_gauge.animationSpeed = 32; // set animation speed (32 is default value)
    speed_gauge.set(57); // set actual value
    speed_gauge.setTextField(document.getElementById("speed-avg-text"));


    var rpm_target = document.getElementById('rpm-avg'); // your canvas element
    var rpm_gauge = new Gauge(rpm_target).setOptions(opts); // create sexy gauge!
    rpm_gauge.maxValue = 100; // set max gauge value
    rpm_gauge.animationSpeed = 32; // set animation speed (32 is default value)
    rpm_gauge.set(57); // set actual value
    rpm_gauge.setTextField(document.getElementById("rpm-avg-text"));

    var trip_target = document.getElementById('trip-avg'); // your canvas element
    var trip_gauge = new Gauge(trip_target).setOptions(opts); // create sexy gauge!
    trip_gauge.maxValue = 100; // set max gauge value
    trip_gauge.animationSpeed = 32; // set animation speed (32 is default value)
    trip_gauge.set(57); // set actual value
    trip_gauge.setTextField(document.getElementById("trip-avg-text"));*/



    $(document).ready(function() {
    } );

    var imeiVehicle = '<?php echo $vehicleImei?>';
    var SpeedGauge = new RadialGauge({
        renderTo: 'speedoMeter',
        width: 180,
        height: 180,
        units: "Km/h",
        minValue: 0,
        maxValue: 255,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100",
            "120",
            "140",
            "160",
            "180",
            "200",
            "220",
            "240",
            "255"
        ],
        minorTicks: 2,
        strokeTicks: true,
        highlights: [
            {
                "from": 180,
                "to": 255,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: true,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    }).draw();

    var throttleGauge = new RadialGauge({
        renderTo: 'throttle',
        width: 180,
        height: 180,
        title: "rpm",
        units: "(x 1000)",
        minValue: 0,
        maxValue: 8000,
        majorTicks: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ],
        minorTicks: 10,
        strokeTicks: true,
        highlights: [
            {
                "from": 6000,
                "to": 8000,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: true,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    }).draw();

    $.ajax({
        url : "<?php echo site_url('admin/report/batteryData/'.$vehicleImei)?>",
        type: "get",
        dataType: "json",
        success: function(respons) 
        {
            var time = [];
            var voltage_min = [];
            var minimum;
            var i;
            for (i = 0; i < respons.length; i++) {
                time.push(respons[i].time);
            }

            for (i = 0; i < respons.length; i++) {
                voltage_min.push(parseFloat(respons[i].voltage_min));
            }

    Array.prototype.min = function() {
      return Math.min.apply(null, this);
    };
    
    minimum = voltage_min.min();
	minimum = (minimum- 12) / 0.034;
	if (minimum<0) minimum=0
	minimum = Math.round(minimum)
	if (minimum=='Infinity') minimum=0
    console.log(Math.round(minimum));
    $('#weekbattery').html(minimum);
    Highcharts.chart('container2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Battery Condition History'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: time
    },
    yAxis: {
        title: {
            text: 'Voltage'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Voltage Minimum',
        data: voltage_min
    }]
    });

            $('#weekbattery').html(Math.round(minimum));
            Highcharts.chart('container2', {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Battery Condition History'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: time
                },
                yAxis: {
                    title: {
                        text: 'Voltage'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: 'Voltage Minimum',
                    data: voltage_min
                }]
            });

            Highcharts.chart('container1', {
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                yAxis: {
                    gridLineWidth: 0
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.25,
                        borderWidth: 0,
                        color: '#000',
                        targetOptions: {
                            width: '200%'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                chart: {
                    inverted: true,
                    marginLeft: 10,
                    type: 'bullet'
                },
                title: {
                    text: 'Battery Lifetime (V)'
                },
                xAxis: {
                    categories: ['<span class="hc-cat-title">Battery</span><br/>']
                },
                yAxis: {
                        max: 12.7,
                        min: 7,
                    plotBands: [{
                        from: 6,
                        to: 9,
                        color: '#ef4a47'
                    }, {
                        from:9,
                        to: 12,
                        color: '#fca31d'
                    }, {
                        from: 12,
                        to: 9e9,
                        color: '#86c142'
                    }],
                    title: null
                },
                series: [{
                    data: [{
                        y: voltage_min.min()
                    }]
                }],
                tooltip: {
                    pointFormat: '<b>{point.y}</b> (current Voltage {point.y})'
                }
            });
            Highcharts.chart('container3', {
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                yAxis: {
                    gridLineWidth: 0
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.25,
                        borderWidth: 0,
                        color: '#000',
                        targetOptions: {
                            width: '200%'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                chart: {
                    inverted: true,
                    marginLeft: 10,
                    type: 'bullet'
                },
                title: {
                    text: 'Oil Engine Lifetime (V)'
                },
                xAxis: {
                    categories: ['<span class="hc-cat-title">Oil</span><br/>']
                },
                yAxis: {
                        max: 5000,
                        min: 0,
                        
                    plotBands: [{
                        from: 0,
                        to: 2500,
                        color: '#ef4a47'
                    }, {
                        from:2500,
                        to: 4000,
                        color: '#fca31d'
                    }, {
                        from: 4000,
                        to: 5000,
                        color: '#86c142'
                    }],
                    title: null
                },
                series: [{
                }],
            });
            Highcharts.chart('container5', {
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                yAxis: {
                    gridLineWidth: 0
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.25,
                        borderWidth: 0,
                        color: '#000',
                        targetOptions: {
                            width: '200%'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                chart: {
                    inverted: true,
                    marginLeft: 10,
                    type: 'bullet'
                },
                xAxis: {
                    categories: ['<span class="hc-cat-title">Oil</span><br/>']
                },
                yAxis: {
                        max: 90,
                        min: 0,
                    plotBands: [{
                        from: 0,
                        to: 40,
                        color: '#ef4a47'
                    }, {
                        from:40,
                        to: 80,
                        color: '#fca31d'
                    }, {
                        from: 80,
                        to: 90,
                        color: '#86c142'
                    }],
                    title: null
                },
                series: [{
                }],
            });

            Highcharts.chart('container6', {
                title: {
                    text: null
                },
                legend: {
                    enabled: false
                },
                yAxis: {
                    gridLineWidth: 0
                },
                plotOptions: {
                    series: {
                        pointPadding: 0.25,
                        borderWidth: 0,
                        color: '#000',
                        targetOptions: {
                            width: '200%'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                chart: {
                    inverted: true,
                    marginLeft: 10,
                    type: 'bullet'
                },
                xAxis: {
                    categories: ['<span class="hc-cat-title">Oil</span><br/>']
                },
                yAxis: {
                        max: 400,
                        min: 0,
                    plotBands: [{
                        from: 0,
                        to: 300,
                        color: '#ef4a47'
                    }, {
                        from:300,
                        to: 365,
                        color: '#fca31d'
                    }, {
                        from: 365,
                        to: 429,
                        color: '#86c142'
                    }],
                    title: null
                },
                series: [{
                }],
            });
        }
    });



    $('[data-toggle="tabajax"]').click(function(e) {
        var ini = $(this),
            loadurl = ini.attr('href'),
            targ = ini.attr('data-target');

        if (targ === '#speedVsEngineTab')
        {
            $.ajax({
                url : loadurl,
                type: "GET",
                dataType: "JSON",
                beforeSend: function () {
                    $(targ).html('<h2 class="text-center"><i class="fa fa-refresh fa-spin"></i></h2>');
                    
                },
                success: function(response)
                {
                    console.log(response);
                    $(targ).html('<div id="speedVsEngine" style="height: 420px; width: 100%"></div>');
                    if (response.status === true)
                    {
                        var speed = response.speedObd;
                        var engLoad = response.dataEngLoad;
                        var speedOBD = [];
                        var loadMeter = [];

                        var i;
                        for (i = 0; i < speed.length; i++) {
                            speedOBD.push(parseFloat(speed[i]));
                        }

                        for (i = 0; i < engLoad.length; i++) {
                            loadMeter.push(parseFloat(engLoad[i]));
                        }

                        Highcharts.chart('speedVsEngine', {
                            chart: {
                                type: 'areaspline'
                            },
                            title: {
                                text: 'Engine Load Vs Speed'
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'left',
                                verticalAlign: 'top',
                                x: 60,
                                y: 20,
                                floating: true,
                                borderWidth: 1,
                                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                            },
                            xAxis: {
                                categories: response.dateTimeObd
                            },
                            yAxis: {
                                title: {
                                    text: 'Units'
                                }
                            },
                            tooltip: {
                                shared: true
                            },
                            credits: {
                                enabled: false
                            },
                            plotOptions: {
                                areaspline: {
                                    fillOpacity: 0.5
                                }
                            },
                            series: [{
                                name: 'Speed',
                                data: speedOBD,
                                tooltip: {
                                    valueSuffix: ' KM/H'
                                }
                            }, {
                                name: 'Engine Load',
                                data: loadMeter,
                                tooltip: {
                                    valueSuffix: ' %'
                                }
                            }]
                        });
                    }
                    else
                    {
                        $(targ).html('<h4 class="text-center">' + response.error +'</h4>');
                    }
                },
                error: function ()
                {
                    alert('Error, no data found, please reload !');
                }
            });
        }
        else
        {
            $.ajax({
                url : loadurl,
                type: "GET",
                dataType: "JSON",
                beforeSend: function () {
                    $(targ).html('<h2 class="text-center"><i class="fa fa-refresh fa-spin"></i></h2>');
                },
                success: function(response)
                {
                    $(targ).html('<div id="throtleVsFlowRate" style="height: 420px; width: 900px"></div>');
                    if (response.status === true)
                    {
                        var engFlow = response.engineFlow;
                        var throttle = response.throttleObd;
                        var engineFlow = [];
                        var throttleData = [];

                        var i;
                        for (i = 0; i < engFlow.length; i++) {
                            engineFlow.push(parseFloat(engFlow[i]));
                        }

                        for (i = 0; i < throttle.length; i++) {
                            throttleData.push(parseFloat(throttle[i]));
                        }

                        Highcharts.chart('throtleVsFlowRate', {
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: 'Throttle Vs Flow Rate'
                            },
                            xAxis: {
                                categories: response.dateTimeObd,
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'KPA'
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            },
                            series: [{
                                name: 'Flow Rate (Gr/s)',
                                data: engineFlow
                            }, {
                                name: 'Throttle (%)',
                                data: throttleData
                            }]
                        });
                    }
                    else
                    {
                        $(targ).html('<h4 class="text-center">' + response.error +'</h4>');
                    }
                },
                error: function ()
                {
                    alert('Error, no data found, please reload !');
                }
            });
        }
        ini.tab('show');
        return false;
    });

    socket.on( 'new_obd_data', function( data ) {
        var obdImei = data.imei;
        console.log(data.imei);

        var coolantData =  data.pid5coolant;
        var engloadData =  data.pid4load;

        /*coolantData = toString(coolantData);*/

        if (obdImei === imeiVehicle)
        {
            $('#obd_date').html('Last Update: '+ data.time);
           /*$('#coolant').html(data.pid5coolant +'°C');
            $('#engine').html(data.pid4load +'%');*/
            if (coolantData)
            {
                $('#coolant').html(data.pid5coolant +'°C');
            }

            if (engloadData)
            {
                $('#engine').html(data.pid4load +'%');
            }

            SpeedGauge.value = data.speed;
            throttleGauge.value = data.pid12rpm;
        }
    });

    monthlyTable();
    var sortDecision;
    var dataSort;
    var page;
    var hasil;
    $('#sortByDateCreateMonthly').on('click', function () {
        var btnData = $(this).data('sort');
        dataSort = btnData;
        $('#sortByDateMonthly').val(btnData);
        $('#sortByDistanceMonthly').val('');
        sortDecision = 'dateMonthly';
        var status = monthlyTabel();
        if(status === true) {
            if (btnData === 'desc') {
                $(this).data('sort', 'asc');
            } else {
                $(this).data('sort', 'desc');
            }
        }
    });

    $('#sortByTotalDistanceMonthly').on('click', function () {
        var btnData = $(this).data('sort');
        dataSort = btnData;
        $('#sortByDateMonthly').val('');
        $('#sortByDistanceMonthly').val(btnData);
        sortDecision = 'distanceMonthly';
        var status = monthlyTabel();
        if(status === true) {
            if (btnData === 'desc') {
                $(this).data('sort', 'asc');
            } else {
                $(this).data('sort', 'desc');
            }
        }
    });

    $('#sortByDateCreateDaily').on('click', function () {
        var btnData = $(this).data('sort');
        dataSort = btnData;
        $('#sortByDateDaily').val(btnData);
        sortDecision = 'dateDaily';
        var status = dailyTable();
        if(status === true) {
            if (btnData === 'desc') {
                $(this).data('sort', 'asc');
            } else {
                $(this).data('sort', 'desc');
            }
        }
    });

    $('#datepickerMonth').datepicker({
        format: "MM-yyyy",
        viewMode: "months",
        minViewMode: "months"
    });

    $('#datepickerDaily').datepicker({
        format: "yyyy-mm-dd",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true
    });

    $('#tableDistanceTab').on('click', function () {
       $('#rowOpt').removeClass('hide');
       $('#createExcelDistance').removeClass('hide');
    });

    $('#chartDistanceTab').on('click', function () {
        $('#rowOpt').addClass('hide');
        $('#createExcelDistance').addClass('hide');
    });

    $('#foo-table-monthly').footable();
    $('#foo-table-daily').footable();


    $('#createExcelDaily').on('click', function () {
        $('[name="buttonType"]').val('excel');
        var formData = new FormData($('#dailyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/validateExcel',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (data) {
                if (data.success === true) {
                    var startDate = $('[name="historyStart"]').val();
                    var endDate = $('[name="historyEnd"]').val();
                    $('[name="dateStart"]').val(startDate);
                    $('[name="dateEnd"]').val(endDate);
                    $('#createExcelForm').attr("action",'<?php echo base_url(); ?>admin/report/createExcelDaily').submit();
                    $('#messages').html('<i class="fa fa-refresh fa-spin"></i> '+ data.messages);
                    $('#excelValidationModal').show(10, function() {
                        $(this).delay(3000).hide(10, function() {
                            $(this).modal('hide');
                        });
                    })
                }
                else {
                    $('#messages').html(data.errors);
                    $('#excelValidationModal').show(10, function() {
                        $(this).delay(2000).hide(10, function() {
                            $(this).modal('hide');
                        });
                    })
                }
            },
            error: function ()
            {
                alert('Fail to fetch data, please reload');
            }
        });
    });

    $('#createExcelDistance').on('click', function () {
        $('[name="buttonType"]').val('excel');
        var formData = new FormData($('#monthlyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/validateExcel',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (data) {
                if (data.success === true) {
                    var startDate = $('[name="monthlyStart"]').val();
                    var endDate = $('[name="monthlyEnd"]').val();
                    $('[name="dateStart"]').val(startDate);
                    $('[name="dateEnd"]').val(endDate);
                    $('#createExcelForm').attr("action",'<?php echo base_url(); ?>admin/report/createExcelMonthly').submit();
                    $('#messages').html('<i class="fa fa-refresh fa-spin"></i> '+ data.messages);
                    $('#excelValidationModal').show(10, function() {
                        $(this).delay(5000).hide(10, function() {
                            $(this).modal('hide');
                        });
                    })
                }
                else {
                    $('#messages').html(data.errors);
                    $('#excelValidationModal').show(10, function() {
                        $(this).delay(2000).hide(10, function() {
                            $(this).modal('hide');
                        });
                    })
                }
            },
            error: function ()
            {
                alert('Fail to fetch data, please reload');
            }
        });
    });

    function getEco(){
        $.ajax({
            url : "<?php echo site_url('admin/report/getEco')?>",
            type: "get",
            dataType: "json",
            beforeSend: function () {
                $('#dashboard-map').remove();
            },
            success: function(respons)
            {
                var locations = [];
                for (var i =0; i< respons.total_data ; i++) {
                    locations.push( {lat : parseFloat(respons.datamap[i][2]),
                        lng : parseFloat(respons.datamap[i][1]),
//                        a : respons.datamap[i][3],
//                        g : respons.datamap[i][0],
//                        b : respons.datamap[i][4],
//                        c : respons.datamap[i][5],
//                        d : respons.datamap[i][6],
//                        e : respons.datamap[i][7]
                    });
                }
                var map = new google.maps.Map(document.getElementById('map-panel'), {
//                    zoom: 4,
//                    center: {lat: -6.121435, lng: 106.774124}
                    lat: parseFloat(respons.datamap[0][2]),
                    lng: parseFloat(respons.datamap[0][1]),
                    zoom: 12
                });
                var infoWin = new google.maps.InfoWindow();
                var markers = locations.map(function(location,i) {
                    var marker = new google.maps.Marker({
                        position: location
                    });
                    marker.setIcon({
                        path: path,
                        scale: .03,
                        strokeColor: 'white',
                        strokeWeight: .10,
                        fillOpacity: 1,
                        offset: '50%',
                        fillColor: '#404040',
                        anchor: new google.maps.Point(500, 500)
                    });
                    return marker;
                });
            },
            error: function ()
            {
                alert('Connection Reset when map loading!');
            }
        });

    }

    function getSimulate() {
        $('[name="buttonType"]').val('simulation');
        $('[name="imei_no"]').val(imeiVehicle);
        var formData = new FormData($('#dailyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/getSimulation',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            beforeSend: function () {
                $('#messages').html('<i class="fa fa-refresh fa-spin"></i> '+ 'Processing data');
                $('#excelValidationModal').show();
            },
            success: function (data) {
                if (data.success === true) {
                    $('#avg-speed').html(data.speed_avg + ' KM/h');
                    $('#distance-total').html(data.distance_total + ' KM');
                    $('#hour-total').html(data.hour_riding);
                    $('#hour-heavy').html(data.heavy_time);
                    $('#hour-medium').html(data.medium_time);
                    $('#hour-low').html(data.low_time);
                    $('#hour-idle').html(data.idle_time);
                    $('#max-speed').html(data.max_speed + ' KM/h');
                    $('#eco-drive').html(data.eco_drive)+ ' %';
                    $('#simulation').delay(5000).modal('show');
                    $('#sim-map').append('<div id="route-map" style="height: 100%;"></div>');

                    var latlang;
                    var mapSim = new GMaps({
                        div: '#route-map',
                        lat: parseFloat(data.startLat),
                        lng: parseFloat(data.startLng),
                        zoom: 12
                    });
                    var i;
                    var iwindow = new google.maps.InfoWindow({
                        content: ''
                    });
                    var polyLine;
                    var polyArray = [];
                    var simulationInterval;
                    var duration;
                    for (i = 0; i < data.total_data; i++) {

                        if (i > 0)
                        {
                            //lat-long 1 ke lat-long 2
                            latlang = [[parseFloat(data.mapdata[i-1][0]),parseFloat(data.mapdata[i-1][1])],[parseFloat(data.mapdata[i][0]),parseFloat(data.mapdata[i][1])]];
                            polyLine = mapSim.drawPolyline({
                                path: latlang,
                                strokeColor: data.mapdata[i][7],
                                strokeOpacity: 0.6,
                                strokeWeight: 6
                            });

                            polyArray.push(polyLine);

                            if (data.mapdata[i][6] === '')
                            {
                                duration = '-';
                            }
                            else
                            {
                                duration = data.mapdata[i][6];
                            }
                            var content = 'speed :' + data.mapdata[i][4] + 'Km/h' + '<br>'+
                                'date time :' + data.mapdata[i][2] + '<br>'+
                                'duration :' + duration + '<br>'+
                                'location :' + data.mapdata[i][3] + '<br>'+
                                'distance :' + data.mapdata[i][8] ;

                            var iwindowPos = new google.maps.LatLng(parseFloat(data.mapdata[i][0]),parseFloat(data.mapdata[i][1]));
                            createInfoWindow(polyLine, mapSim, iwindow, content,iwindowPos);

                        }
                    }
                    $('#excelValidationModal').hide();
                    /*$('#run-simulation').on('click', function (){
                        removeLine(polyArray,data.total_data);
                    });*/


                } else {
                    $('#messages').html(data.errors);
                    $('#excelValidationModal').hide();
                }
            },
            error: function ()
            {
                alert('Fail to fetch data, please reload');
            }
        });
    }

    function getSimulate2() {
        $('[name="buttonType"]').val('simulation');
        $('[name="imei_no"]').val(imeiVehicle);
        var formData = new FormData($('#dailyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/getSimulation2',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            beforeSend: function () {
                $('#messages').html('<i class="fa fa-refresh fa-spin"></i> '+ 'Processing data');
                $('#excelValidationModal').show();
            },
            success: function (data) {
                console.log(data);
                $('#excelValidationModal').hide();

                if (data.success === true) {
                    $('#avg-speed').html(data.speed_avg + ' KM/h');
                    $('#distance-total').html(data.distance_total + ' KM');
                    $('#hour-total').html(data.hour_riding);
                    $('#hour-heavy').html(data.heavy_time);
                    $('#hour-medium').html(data.medium_time);
                    $('#hour-low').html(data.low_time);
                    $('#hour-idle').html(data.idle_time);
                    $('#max-speed').html(data.max_speed + ' KM/h');
                    $('#eco-drive').html(data.eco_drive)+ ' %';
                    $('#simulation').delay(5000).modal('show');
                    $('#sim-map').append('<div id="route-map" style="height: 100%;"></div>');

                    var latlang;
                    var mapSim = new GMaps({
                        div: '#route-map',
                        lat: parseFloat(data.map_data[0]['lat']),
                        lng: parseFloat(data.map_data[0]['lng']),
                        zoom: 12
                    });
                    var i;
                    var iwindow = new google.maps.InfoWindow({
                        content: ''
                    });
                    var polyLine;
                    var polyArray = [];
                    var simulationInterval;
                    var duration;
                    for (i = 1; i < data.total_data; i++) {

                        //lat-long 1 ke lat-long 2
                        latlang = [[parseFloat(data.map_data[i-1]['lat']),parseFloat(data.map_data[i-1]['lng'])],[parseFloat(data.map_data[i]['lat']),parseFloat(data.map_data[i]['lng'])]];
                        polyLine = mapSim.drawPolyline({
                            path: latlang,
                            strokeColor: data.map_data[i]['color'],
                            strokeOpacity: 0.6,
                            strokeWeight: 6
                        });

                        polyArray.push(polyLine);

                        if (data.map_data[i]['duration'] === '')
                        {
                            duration = '-';
                        }
                        else
                        {
                            duration = data.map_data[i]['duration'];
                        }
                        var content = 'speed :' + data.map_data[i]['speed'] + 'Km/h' + '<br>'+
                            'date time :' + data.map_data[i]['datetime'] + '<br>'+
                            'duration :' + duration + '<br>'+
                            'location :' + data.map_data[i]['address'] + '<br>'+
                            'distance :' + data.map_data[i]['distance'] ;

                        var iwindowPos = new google.maps.LatLng(parseFloat(data.map_data[i]['lat']),parseFloat(data.map_data[i]['lng']));
                        createInfoWindow(polyLine, mapSim, iwindow, content,iwindowPos);

                    }
                    $('#excelValidationModal').hide();
                    /*$('#run-simulation').on('click', function (){
                        removeLine(polyArray,data.total_data);
                    });*/


                } else {
                    $('#messages').html(data.errors);
                    $('#excelValidationModal').hide();
                }
            },
            error: function ()
            {
                $('#excelValidationModal').hide();
                alert('Fail to fetch data, please reload');
            }
        });
    }

    function removeLine(polyArray,iwindowArray,dataTotal) {
        for(var i = 0; i <= dataTotal; i++)
        {
            polyArray[i].setMap(null);
        }
    }

    function createInfoWindow(polyline, mapSim, iwindow, content,iwindowPos) {
        google.maps.event.addListener(polyline, 'click', function() {
            iwindow.setContent(content);
            iwindow.setPosition(iwindowPos);
            iwindow.open(mapSim, polyline);
        });
        return iwindow;
    }

    function runSimulation() {
         var simulationInterval = setInterval(function(){
                               }, 500);
        clearInterval(simulationInterval);
    }

    function getChartDayDistance() {
        var formData = new FormData($('#monthlyRole')[0]);
        $.ajax({
            type: 'post',
            url: "<?php echo site_url('admin/report/getChart')?>",
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(respons)
            {
                $('#distanceChart').remove();
                if (respons.status === true)
                {
                    $('#chart').append('<div class="panel-body" id="distanceChart" style="height: 420px"></div>');
                    var dateDay = [];
                    var meterData = [];

                    var i;
                    for (i = 0; i < respons.total_datameter; i++) {
                        dateDay.push(respons.datameter[i][1]);
                        meterData.push(parseFloat(respons.datameter[i][0]));
                    }
                    Highcharts.chart('distanceChart', {

                        title: {
                            text: 'Daily Distance'
                        },

                        subtitle: {
                            text: 'Periode:'
                        },

                        yAxis: {
                            title: {
                                text: 'Distance (KM)'
                            }
                        },
                        xAxis: {
                            title: {
                                enabled: true,
                                text: 'Date'
                            },
                            categories: dateDay
                        },

                        series: [{
                            name: 'Distance (KM)',
                            type: 'column',
                            colorByPoint: true,
                            data: meterData,
                            showInLegend: false
                        }]

                    });
                }
                else
                {
                    $('#chart').append('<div class="panel-body" id="distanceChart">' +
                        '<p class="text-center">No Chart Data for this month, please choose another period!</p></div>');
                }
            },
            error: function ()
            {
                alert('Fail to Load data, please reload!');
            }
        });
    }

    $('#monthlyRole').submit(function(e) {
        e.preventDefault();
    });
    $('#simulation').on('hide.bs.modal', function () {
        $('#route-map').remove();
    });

    function monthlyTable(page_num) {
        page = page_num?page_num:0;
        $('#pageMonthly').val(page);
        $('#data-false-monthly').remove();
        var formData = new FormData($('#monthlyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/monthlyTable',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            beforeSend: function () {
                $('#data-list-monthly').find("tr").remove();
                $('#loadingMileageTable').fadeIn();
            },
            success: function (respons) {
                $('#loadingMileageTable').fadeOut();

                $('#distanceChart').remove();
                if (true)
                {
                    $('#chart').append('<div class="panel-body" id="distanceChart" style="height: 420px"></div>');
                    Morris.Bar({
                        element: 'distanceChart',
                        data: respons.data,
                        xkey: 'datetime',
                        ykeys: ['km'],
                        labels: ['KM'],
                        gridEnabled: false,
                        gridLineColor: 'transparent',
                        barColors: ['#177bbb'],
                        resize:true,
                        hideHover: 'auto'
                    });

                    $('#mileageTable')
                        .on('preXhr.dt', function ( e, settings, data ) {
//                $('#loadingforkliftSummaryReport').fadeIn();
                        } )
                        .on('xhr.dt', function ( e, settings, json, xhr ) {
//                $('#loadingforkliftSummaryReport').hide();
                        } )
                        .DataTable( {
                            "destroy": true,
                            "data": respons.data,
                            "columns": [
                                { "data": "datetime" },
                                { "data": "km" }
                            ],
                            "paging": true,
                            dom: 'Bfrtip',
                            buttons: [
                                'copyHtml5',
                                {
                                    extend: 'excelHtml5',
                                    title: 'Forklift Report',
                                    messageTop: 'The information in this table is copyright to MyVeeGO.',
                                    messageBottom: 'The information in this table is copyright to MyVeeGO.'
                                },
                                'csvHtml5',
                                'pdfHtml5'
                            ]
                        } );
                }
                else
                {
                    $('#chart').append('<div class="panel-body" id="distanceChart">' +
                        '<p class="text-center">No Chart Data for this month, please choose another period!</p></div>');
                }

            },
            error: function ()
            {
                alert('Fail to fetch data, please reload');
                hasil = false;
            }
        });
        return hasil;
    }

    function createNewMileageTable(id, start, end){
        $('#mileageTable')
            .on('preXhr.dt', function ( e, settings, data ) {
//                $('#loadingforkliftSummaryReport').fadeIn();
            } )
            .on('xhr.dt', function ( e, settings, json, xhr ) {
//                $('#loadingforkliftSummaryReport').hide();
            } )
            .DataTable( {
                "destroy": true,
                "ajax": {
                    "url": "<?php echo base_url(); ?>v2/admin/forklift/report/"+id+'A'+start+'A'+end,
                    "type": "GET"
                },
                "columns": [
                    { "data": "datetime" },
                    { "data": "vehicle_name" },
                    { "data": "plat_no" },
                    { "data": "cust_name" },
                    { "data": "duration" },
                    { "data": "imei_no" }
                ],
                "paging": false,
                dom: 'Bfrtip',
                buttons: [
                    'copyHtml5',
                    {
                        extend: 'excelHtml5',
                        title: 'Forklift Report',
                        messageTop: 'The information in this table is copyright to MyVeeGO.',
                        messageBottom: 'The information in this table is copyright to MyVeeGO.'
                    },
                    'csvHtml5',
                    'pdfHtml5'
                ]
            } );


    }

    function getNewMileageTable() {
        var start = document.getElementById("monthlyStart").value;
        var end = document.getElementById("monthlyEnd").value;
        var id = document.getElementById("vehicleID").value;
        createNewMileageTable(id,start,end);

    }

    $('#dailyRole').submit(function(e) {
        e.preventDefault();
    });

    function getTripHistory(page_num){
        page = page_num?page_num:0;
        $('#pageDaily').val(page);
        $('#data-false-daily').remove();
        var formData = new FormData($('#dailyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/get_props/',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            beforeSend: function () {
//                $('#data-list-daily').find("tr").remove();
//                $('#loading-daily').fadeIn();
            },
            success: function (data) {
                var getTripHistoryTable  = $('#tripHistoryDays')
                    .on('preXhr.dt', function ( e, settings, data ) {
                        $('#loading-daily').fadeIn();
                    } )
                    .on('xhr.dt', function ( e, settings, json, xhr ) {
                        $('#loading-daily').hide();
                    } )
                    .DataTable( {
                        destroy: true,
                        "ajax": {
                        "url": "<?php echo base_url(); ?>admin/report/get_trip_history/"+data.vehicleID+"/"+data.historyStart+"/"+data.historyEnd,
                        "type": "GET"
                    },
                    "columns": [
                        { "data": "id" },
                        { "data": "datetime" },
                        { "data": "address" },
                        { "data": "speed" }
                    ],
                    "columnDefs": [ {
                        "searchable": false,
                        "orderable": false,
                        "targets": 0
                    } ],
                    "order": [[ 1, 'asc' ]],
                        dom: 'Bfrtip',
                        buttons: [
                            'copyHtml5',
                            {
                                extend: 'excelHtml5',
                                title: 'Forklift Report',
                                messageTop: 'The information in this table is copyright to MyVeeGO.',
                                messageBottom: 'The information in this table is copyright to MyVeeGO.'
                            },
                            'csvHtml5',
                            'pdfHtml5'
                        ]
                } );

                getTripHistoryTable.on( 'order.dt search.dt', function () {
                    getTripHistoryTable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                        cell.innerHTML = i+1;
                    } );
                } ).draw();
            },
            error: function ()
            {
                alert('Fail to fetch data, please reload');
                hasil = false;
            }
        });
        return page;

    }

    function dailyTable(page_num) {
        page = page_num?page_num:0;
        $('#pageDaily').val(page);
        $('#data-false-daily').remove();
        var formData = new FormData($('#dailyRole')[0]);
        $.ajax({
            type: 'post',
            url: '<?php echo base_url(); ?>admin/report/dailyTable/',
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            beforeSend: function () {
                $('#data-list-daily').find("tr").remove();
                $('#loading-daily').fadeIn();
            },
            success: function (data) {
                if(data.success === true){
                    hasil = true;
                    $('#loading-daily').hide();
                    if(sortDecision === 'dateDaily'){
                        if(dataSort === 'asc'){
                            $('#sortByDateCreateDaily')
                                .find('.fa').removeClass('fa-sort-numeric-asc')
                                .addClass('fa-sort-numeric-desc');
                        }else {
                            $('#sortByDateCreateDaily')
                                .find('.fa').removeClass('fa-sort-numeric-desc')
                                .addClass('fa-sort-alpha-asc');
                        }
                    }
                    $('#data-list-daily').append(data.data_list).trigger('footable_redraw');
                    $('#data-pagination-daily').html(data.pagination);
                }
                else{
                    hasil = false;
                }
            },
            error: function ()
            {
                alert('Fail to fetch data, please reload');
                hasil = false;
            }
        });
        return hasil;
    }

    var iconUrl = '<?php echo site_url('assets/plugins/gmaps/img/car1.png');?>';
    $('#map-panel').append('<div id="detail-map" style="height: 100%;"></div>');
    var map2 = new GMaps({
        div: '#detail-map',
        lat: parseFloat('<?php echo $lat;?>'),
        lng: parseFloat('<?php echo $lng;?>'),
        zoom: 12
    });
    map2.addMarker({
        lat: parseFloat('<?php echo $lat;?>'),
        lng: parseFloat('<?php echo $lng;?>'),
        title: '<?php echo $marker_title;?>',
        icon : {
            scaledSize : new google.maps.Size(26, 35),
            url : iconUrl
        }
    });

</script>



<script>
    var imeiVehicle = '<?php echo $vehicleImei?>';
    $.ajax({
        url : "<?php echo site_url('admin/report/filterPercentData/'.$vehicleImei)?>",
        type: "get",
        dataType: "json",
        success: function(respons) 
        {
            var time = [];
            var percent = [];
            var minimum;
            var i;
            for (i = 0; i < respons.length; i++) {
                time.push(respons[i].time);
            }

            for (i = 0; i < respons.length; i++) {
                percent.push(parseFloat(respons[i].percent));
            }

            //for get newest percent in table a_filter  
            // Array.prototype.min = function() {
            //   return Math.min.apply(null, this);
            // };

            // last = percent.min();
            // //create variabel for newest percent
            // minimum = voltage_min.min();
            // minimum = (minimum- 12) / 0.034;
            // if (minimum<0) minimum=0
            // console.log(Math.round(minimum));

            //============================
            s$('#gauge-percent').html(Math.round(last));
            var gaugeOptions = {
                chart: {
                    type: 'solidgauge'
                },
                title: null,
                pane: {
                    // center: ['80%', '60%'],
                    size: '100%',
                    startAngle: -180,
                    endAngle: 180,
                    background: {
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                        innerRadius: '60%',
                        outerRadius: '100%',
                        //shape: 'arc'
                    }
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    stops: [
                      [0.1, '#DF5353'], // red
                      [0.5, '#DDDF0D'], // yellow
                      [0.9, '#4393FF'] // blue
                    ],
                    minorTickInterval: null,
                    tickAmount: 2   ,
                    title: {
                      y: -70
                    },
                    labels: {
                      y: 16
                    }
                  },
                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            y: -5,
                            borderWidth: 0,
                        }
                    }
                }
            }

            // The speed gauge
            var chartSpeed = Highcharts.chart('gauge-percent', Highcharts.merge(gaugeOptions, {

                yAxis: {
                    min: 0,
                    max: 100,
                    labels:{
                        enabled:false//default is true
                    }
                },

                credits: {
                    enabled: false
                },

                series: [{
                    name: 'Speed',
                    data: [<?php echo "80";?>
                    ], 
                    dataLabels: {
                      format: '<div style="text-align:center"><span style="font-size:30px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver">%</span></div>'
                    },
                    tooltip: {
                      valueSuffix: ' km/h'
                    }
                }]
            }));

            Highcharts.chart('temperatureChart', {
                title: {
                    text: 'Air Filter Condition History'
                },

                 xAxis: {
                    categories: time
                    },
                yAxis: {
                    title: {
                      text: 'Angle'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    line: {
                      dataLabels: {
                        enabled: true
                      },
                      enableMouseTracking: false
                    }
                },

                series: [{
                    name: 'Temperature',
                    data: percent
                }],

                responsive: {
                    rules: [{
                      condition: {
                        maxWidth: 500
                      },
                      chartOptions: {
                        legend: {
                          layout: 'horizontal',
                          align: 'center',
                          verticalAlign: 'bottom'
                        }
                      }
                    }]
                }

            });
        }
        error: function ()
        {
            alert('Fail to fetch data, please reload');
        }
    });
</script>