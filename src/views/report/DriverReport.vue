<template>
  <div id="content-container">
    <div class="panel-heading">
      <h5 class="panel-title"><b>Driver Report</b></h5>
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
            mdbDatatable
        },
        data() {
            return {
                data: {
                    columns: [
                        {
                            label: 'No',
                            field: 'id',
                            sort: 'asc'
                        },
                        {
                            label: 'Driver Name',
                            field: 'drivername',
                            sort: 'asc'
                        },
                        {
                            label: 'Phone',
                            field: 'phone',
                            sort: 'asc'
                        },
                        {
                            label: 'Lisence Number',
                            field: 'lisencenumber',
                            sort: 'asc'
                        },
                        {
                            label: 'Address',
                            field: 'address',
                            sort: 'asc'
                        }
                    ],
                    rows: [
                        {
                            id: '1',
                            drivername: 'mondanglimbong',
                            phone :'4567890',
                            lisencenumber: 'Operator',
                            address: 'Jalan Teladan No.17 ',
                        },
                        {
                            id: '2',
                            drivername: 'mondanglimbong',
                            phone :'4567890',
                            lisencenumber: 'Operator',
                            address: 'Jalan Teladan No.17 ',
                        },
                        {
                            id: '3',
                            drivername: 'mondanglimbong',
                            phone :'4567890',
                            lisencenumber: 'Operator',
                            address: 'Jalan Teladan No.17 ',
                        },
                        {
                            id: '4',
                            drivername: 'mondanglimbong',
                            phone :'4567890',
                            lisencenumber: 'Operator',
                            address: 'Jalan Teladan No.17 ',
                        },
                        {
                            id: '5',
                            drivername: 'mondanglimbong',
                            phone :'4567890',
                            lisencenumber: 'Operator',
                            address: 'Jalan Teladan No.17 ',
                        },

                    ]
                }
            }
        },
    }
</script>
