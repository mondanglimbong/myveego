<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h5><b>Fleet</b></h5>
        <b-form-checkbox-group
          id="fleet"
          v-model="selected"
          :options="fleet"
          name="fleet"
          class="ml-4"
          aria-label="Individual report"
          stacked
        ></b-form-checkbox-group>
      </div>
      <div class="col-3">
        <h5><b>Assets</b></h5>
        <b-form-checkbox-group
          id="assets"
          v-model="selected"
          :options="assets"
          name="assets"
          class="ml-4"
          aria-label="Individual aassets"
          stacked
        ></b-form-checkbox-group>
      </div>
      <div class="col-3">
        <h5><b>CCTV</b><br></h5>
        <b-form-checkbox-group
          id="cctv"
          v-model="selected"
          :options="cctv"
          name="cctv"
          class="ml-4"
          aria-label="Individual cctv"
          stacked
        ></b-form-checkbox-group>
      </div>
      <div class="col-3">
        <h5><b>Fujixerox</b></h5>
        <b-form-checkbox-group
          id="fujixerox"
          v-model="selected"
          :options="fujixerox"
          name="fujixerox"
          class="ml-4"
          aria-label="Individual fujixerox"
          stacked
        ></b-form-checkbox-group>
        <h5><b>ATM</b></h5>
        <b-form-checkbox-group
          id="atm"
          v-model="selected"
          :options="atm"
          name="atm"
          class="ml-4"
          aria-label="Individual atm"
          stacked
        ></b-form-checkbox-group>
      </div>
    </div>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                fleet: ['Vehicle Total', 'Vehicle Move', 'GPS Status', 'Vehicle Idle', 'Map Panel', 'Meter Readings', 'Hour Reading', 'Service Reminders', 'Vehicle List', 'Driver License', 'Vehicle Status', 'On Customer Point', 'Battery Status', 'Eskavator Status', 'OB Dumptruck Status', 'Coaltruck Status', 'Productivity OB Rank', 'Productivity Coaltruck Rank',],
                assets: ['Assets List', 'Assets Map', 'Assets Total', 'Assets Status',],
                cctv: ['CCTV Show 1', 'CCTV Maps', 'CCTV Total', 'CCTV Online Total', 'CCTV Show 2', 'CCTV Show 3', 'CCTV Show 4', 'Change Trend', 'Device History', 'Device Status', 'CCTV List', 'CCTV Status', 'CCTV Delay',],
                fujixerox: ['Cartride Status', 'Drum Status', 'Meter Heat Map', 'Assets List', 'Maps', 'Device Status', 'Assets Total', 'Assets Total', 'Device Type', 'Weste Toner Status', 'Device Performance',],
                atm: ['Event Statistics', 'ATM List', 'ATM Maps', 'ATM Status', 'ATM Total', 'ATM Downtime',],
                selected: [],
                allSelected: false,
                indeterminate: false
            }
        },
        methods: {
            toggleAll(checked) {
                this.selected = checked ? this.flavours.slice() : []
            }
        },
        watch: {
            selected(newVal, oldVal) {
                // Handle changes in individual flavour checkboxes
                if (newVal.length === 0) {
                    this.indeterminate = false
                    this.allSelected = false
                } else if (newVal.length === this.flavours.length) {
                    this.indeterminate = false
                    this.allSelected = true
                } else {
                    this.indeterminate = true
                    this.allSelected = false
                }
            }
        }
    }
</script>
<style>
  #form {
    margin-left: 0px;
  }

  #fleet {
    margin-left: 0px;
  }
</style>
