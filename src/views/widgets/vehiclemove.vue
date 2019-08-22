<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">Vehicle Move</h4>
    </div>
    <div class="text-center">
        <a id="show-btn" @click="showModal"><h1><b>25</b></h1></a>
        <b-modal ref="my-modal" hide-footer title="Move">
          <div class="d-block text-center">
            <form @submit.prevent="add">
              <b-container fluid>
                <mdb-datatable
                  :data="data"
                  striped
                  bordered
                />
              </b-container>

            </form>
          </div>
        </b-modal>
    </div>
  </b-card>
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
                            field: 'no',
                            sort: 'asc'
                        },
                        {
                            label: 'Driver Name',
                            field: 'drivername',
                            sort: 'asc'
                        },
                        {
                            label: 'Vehicle Name',
                            field: 'vehiclename',
                            sort: 'asc'
                        },
                        {
                            label: 'Last Location',
                            field: 'lastlocation',
                            sort: 'asc'
                        },
                        {
                            label: 'Last Date',
                            field: 'lastdate',
                            sort: 'asc'
                        }
                    ],
                    rows: [
                        {
                            no: '1',
                            drivername: 'System Architect',
                            vehiclename : 'Achmad',
                            lastlocation : 'Setia Budi',
                            lastdate :'2019-06-17'
                        },
                        {
                            no: '2',
                            drivername: 'System Architect',
                            vehiclename : 'Achmad',
                            lastlocation : 'Setia Budi',
                            lastdate :'2019-06-17'
                        },
                        {
                            no: '3',
                            drivername: 'System Architect',
                            vehiclename : 'Achmad',
                            lastlocation : 'Setia Budi',
                            lastdate :'2019-06-17'
                        },
                        {
                            no: '4',
                            drivername: 'System Architect',
                            vehiclename : 'Achmad',
                            lastlocation : 'Setia Budi',
                            lastdate :'2019-06-17'
                        },
                    ]
                }
            }
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            }
        }
    }
</script>
