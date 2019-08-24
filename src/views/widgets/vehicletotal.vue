<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">Vehicle Total</h4>
    </div>
    <div class="text-center">
      <a id="show-btn" @click="showModal"><h1><b>78</b></h1></a>
      <b-modal ref="my-modal" hide-footer title="Total">
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

        methods: {
            showModal() {
                this.$refs['my-modal'].show();
            },

            hideModal() {
                this.$refs['my-modal'].hide();
            },
        }
        ,
    }
    ;
</script>
