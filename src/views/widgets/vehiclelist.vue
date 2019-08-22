<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">Vehicle List</h4>
    </div>
    <div text="center">
      <a id="show-btn" @click="showModal">
        <mdb-datatable
        :data="data"
        striped
        bordered
      />
      </a>
      <b-modal ref="my-modal" hide-footer title="Position">
        <div class="d-block text-center">

          <form @submit.prevent="add">
            <hr>
            <b-container fluid>

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
                            label: 'Image',
                            field: 'image',
                            sort: 'asc'
                        },
                        {
                            label: 'Details',
                            field: 'details',
                            sort: 'asc'
                        }
                    ],
                    rows: [
                        {
                            image: 'Tiger Nixon',
                            details: 'System Architect'
                        },
                        {
                            image: 'Garrett Winters',
                            details: 'Accountant'
                        }
                    ]
                }
            }
        }
    }
</script>
<!--<template>-->
<!--  <b-card-->
<!--    header-tag="header"-->
<!--    footer-tag="footer">-->
<!--    <div slot="header">-->
<!--      <h4 class="widget-title">Vehicle List</h4>-->
<!--    </div>-->
<!--    <div>-->
<!--      <a id="show-btn" @click="showModal">-->
<!--        <c-table striped="striped" :table-data="items" ></c-table>-->
<!--      </a>-->
<!--      <b-modal ref="my-modal" hide-footer title="List">-->
<!--        <div class="d-block text-center">-->

<!--          <form @submit.prevent="add">-->
<!--            <hr>-->
<!--            <b-container fluid>-->

<!--            </b-container>-->

<!--          </form>-->
<!--        </div>-->
<!--      </b-modal>-->
<!--    </div>-->
<!--  </b-card>-->
<!--</template>-->
<!--<script>-->
<!--    import { shuffleArray } from '../../shared/utils'-->
<!--    import cTable from '../base/Table.vue'-->

<!--    const someData = () => shuffleArray([-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'},-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'},-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'},-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'},-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'},-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'},-->
<!--        {image: 'Samppa Nori', details: '2012/01/01'}-->
<!--,    ])-->

<!--    export default {-->
<!--        name: 'tables',-->
<!--        components: {cTable},-->
<!--        data: () => {-->
<!--            return {-->
<!--                items: someData,-->
<!--                itemsArray: someData(),-->
<!--                fields: [-->
<!--                    {key: 'image', label: 'User', sortable: true},-->
<!--                    {key: 'details'}-->
<!--                ],-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            showModal() {-->
<!--                this.$refs['my-modal'].show()-->
<!--            },-->

<!--            hideModal() {-->
<!--                this.$refs['my-modal'].hide()-->
<!--            },-->

<!--        }-->
<!--    }-->
<!--</script>-->
