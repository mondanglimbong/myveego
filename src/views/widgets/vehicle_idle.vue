<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">Vehicle Position</h4>
    </div>
    <div>
      <h6>On Pool</h6>
      <b-progress :value="value" :max="max2" :precision="2" show-progress class="mb-3"></b-progress>
      <h6>On Cust. Point</h6>
      <b-progress :value="value" :max="max2" :precision="2" show-progress class="mb-3"></b-progress>
    </div>
  </b-card>
</template>
<script>
    export default {
        name: 'progress-bars',
        data () {
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
                    {variant: 'dark', value: 75},
                ],
                timer: null,
                striped: true,
                animate: true,
                max3: 100,
                values: [ 15, 30, 20 ],
            };
        },
        methods: {
            clicked () {
                this.counter = Math.random() * this.max;
                console.log('Change progress to ' +
                    Math.round(this.counter * 100) / 100);
            },
            setClock() {
                this.timer = setInterval(() => {
                    this.bars.forEach(bar => {
                        bar.value = 25 + (Math.random() * 75);
                    });
                }, 2000);
            },
        },
        mounted () {
            this.setClock();
        },
        beforeDestroy () {
            clearInterval(this.timer);
            this.timer = null;
        },
    };
</script>
