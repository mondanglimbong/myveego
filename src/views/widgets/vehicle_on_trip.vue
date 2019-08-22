<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">On Trip</h4>
    </div>
    <div class="text-center">
      <a id="show-btn" @click="showModal"><h1 style="color:#f86c6b"><b>68</b></h1></h1></a>
      <b-modal ref="my-modal" hide-footer title="On Trip">
        <div class="d-block text-center">

          <form @submit.prevent="add">
            <hr>
            <b-container fluid>
              <c-table striped="striped" :table-data="items" ></c-table>
            </b-container>

          </form>
        </div>
      </b-modal>
    </div>
  </b-card>
</template>
<script>
    import { shuffleArray } from '../../shared/utils'
    import cTable from '../base/Table.vue'

    const someData = () => shuffleArray([
        {image: 'Samppa Nori', details: '2012/01/01'},
        {image: 'Samppa Nori', details: '2012/01/01'},
        {image: 'Samppa Nori', details: '2012/01/01'},
        {image: 'Samppa Nori', details: '2012/01/01'},
        {image: 'Samppa Nori', details: '2012/01/01'},
        {image: 'Samppa Nori', details: '2012/01/01'},
        {image: 'Samppa Nori', details: '2012/01/01'}
        ,    ])
    export default {
        name: 'tables',
        components: {cTable},
        data: () => {
            return {
                items: someData,
                itemsArray: someData(),
                fields: [
                    {key: 'image', label: 'User', sortable: true},
                    {key: 'details'}
                ],
            }
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },

            hideModal() {
                this.$refs['my-modal'].hide()
            },

        }
    }
</script>
