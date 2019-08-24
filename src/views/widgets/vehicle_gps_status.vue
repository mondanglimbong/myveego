<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <h4 class="widget-title">GPS Status</h4>
    </div>
    <div class="text-center">
      <a id="show-btn" @click="showModal">
        <b-row class="col-12">
          <div class="col-xs-6">
            <h1 style="color:#ffc107"><b>0</b></h1>
            <br>
            <small>Delay > 24</small>
          </div>
          <br>
          <div class="col-xs-6">
            <h1 style="color:#20a8d8"><b>33</b></h1>
            <br>
            <small>Delay > 48</small>
          </div>
        </b-row>
      </a>
    </div>
    <b-modal ref="my-modal" hide-footer title="GPS Move">
      <div class="d-block text-center">
        <form @submit.prevent="add">
          <hr>
          <b-container fluid>
          </b-container>

        </form>
      </div>
    </b-modal>
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

        },
    };
</script>
