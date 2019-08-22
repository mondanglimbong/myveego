<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">Vehicle Position</h4>
    </div>
    <div text="center">
      <a id="show-btn" @click="showModal">
        <h6>On Pool</h6>
        <b-progress :value="value" :max="max1" :precision="2" show-progress class="mb-3"></b-progress>
        <h6>On Cust. Point</h6>
        <b-progress :value="value" :max="max2" :precision="2" show-progress class="mb-3"></b-progress>
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
    export default {
        name: 'progress-bars',
        data () {
            return {
                counter: 45,
                max: 0,
                max2: 10,
                value: 33.333333333,
                value3: 75,
                timer: null,
                striped: true,
                animate: true,
                max3: 100,
                values: [ 15, 30, 20 ]
            }
        },
        methods: {
            clicked () {
                this.counter = Math.random() * this.max
                console.log('Change progress to ' +
                    Math.round(this.counter * 100) / 100)
            },
            setClock() {
                this.timer = setInterval(() => {
                    this.bars.forEach(bar => {
                        bar.value = 25 + (Math.random() * 75)
                    })
                }, 2000)
            },
            showModal() {
                this.$refs['my-modal'].show()
            },

            hideModal() {
                this.$refs['my-modal'].hide()
            }
        },
        mounted () {
            this.setClock()
        },
        beforeDestroy () {
            clearInterval(this.timer)
            this.timer = null
        }
    }
</script>
