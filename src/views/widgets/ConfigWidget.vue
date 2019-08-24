<template>
  <div id="content-container">
    <div class="panel-heading">
      <h5 class="panel-title"><b>Vehicle Report</b></h5>
    </div>
    <mdb-datatable
      :data="data"
      striped
      bordered
    />
  </div>
</template>
<script>
    import { mdbDatatable } from 'mdbvue';
    export default {
        name: 'DatatablePage',
        components: {
            mdbDatatable,
        },
        data() {
            return {
                data: {
                    columns: [
                        {
                            label: 'No',
                            field: 'id',
                            sort: 'asc',
                        },
                        {
                            label: 'Vehicle name',
                            field: 'vehiclename',
                            sort: 'asc',
                        },
                        {
                            label: 'Police Number',
                            field: 'policenumber',
                            sort: 'asc',
                        },
                        {
                            label: 'Driver Name',
                            field: 'drivername',
                            sort: 'asc',
                        },
                        {
                            label: 'Distance(KM)',
                            field: 'distance',
                            sort: 'asc',
                        },
                        {
                            label: 'Last Location',
                            field: 'lastlocation',
                            sort: 'asc',
                        },                        {
                            label: 'Last Update',
                            field: 'lastupdate',
                            sort: 'asc',
                        },
                    ],
                    rows: [
                        {
                            id: '1',
                            vehiclename: 'mondanglimbong',
                            policenumber: '4567890',
                            drivername: 'Operator',
                            distance: 'Jalan Teladan No.17 ',
                            lastlocation: 'Jalan Sudirman',
                            lastupdate: '16-08-2019',
                        },
                        {
                            id: '2',
                            vehiclename: 'mondanglimbong',
                            policenumber: '4567890',
                            drivername: 'Operator',
                            distance: 'Jalan Teladan No.17 ',
                            lastlocation: 'Jalan Sudirman',
                            lastupdate: '16-08-2019',
                        },
                        {
                            id: '3',
                            vehiclename: 'mondanglimbong',
                            policenumber: '4567890',
                            drivername: 'Operator',
                            distance: 'Jalan Teladan No.17 ',
                            lastlocation: 'Jalan Sudirman',
                            lastupdate: '16-08-2019',
                        },
                        {
                            id: '4',
                            vehiclename: 'mondanglimbong',
                            policenumber: '4567890',
                            drivername: 'Operator',
                            distance: 'Jalan Teladan No.17 ',
                            lastlocation: 'Jalan Sudirman',
                            lastupdate: '16-08-2019',
                        },
                        {
                            id: '5',
                            vehiclename: 'mondanglimbong',
                            policenumber: '4567890',
                            drivername: 'Operator',
                            distance: 'Jalan Teladan No.17 ',
                            lastlocation: 'Jalan Sudirman',
                            lastupdate: '16-08-2019',
                        },
                    ],
                },
            };
        },
    };
</script>
